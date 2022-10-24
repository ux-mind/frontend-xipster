import axios, { AxiosRequestConfig, Method } from 'axios';
import _capitalize from 'lodash/capitalize';
import _inRange from 'lodash/inRange';

import { emitToast, getApiURL, getObjectIf, getToken } from '@/utils';
import {
	HTTP_METHODS,
	METHODS_WITH_BODY,
	SUPPORTED_HTTP_METHODS,
	CLIENT_ERROR_RANGE_START,
	CLIENT_ERROR_RANGE_END
} from '@/constants';
import { APIMessagesContainer, Fetchers } from '@/types';

const axiosInstance = axios.create({
	baseURL: getApiURL(),
	headers: {
		mode: 'no-cors',
		'Content-Type': 'application/json;charset=utf-8',
	}
});

axiosInstance.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		const token = getToken();

		// Token apply logic

		if (config.method === HTTP_METHODS.PUT) {
			config.headers = {
				'Content-Type': 'application/octet-stream'
			};
		}

		return config;
	}
);

const fetcherFactory = (method: Method) => async <ResponseType = any>(
	url: string,
	dataOrParams: any,
	messagesContainer?: APIMessagesContainer | null,
	onUploadProgress?: (progressEvent: any) => void,
	validateStatus?: () => boolean
): Promise<ResponseType> => {
	const isMethodWithBody = METHODS_WITH_BODY.includes(method);
	let response;

	try {
		response = await axiosInstance({
			method,
			url,
			onUploadProgress,
			...getObjectIf(isMethodWithBody && dataOrParams, { data: dataOrParams }),
			...getObjectIf(!isMethodWithBody && dataOrParams, { params: dataOrParams }),
			...getObjectIf(!!validateStatus, { validateStatus })
		});
	} catch (e: any) {
		if (messagesContainer !== null) {
			emitToast({
				title: messagesContainer?.ERROR || _capitalize(e),
				description: e?.response?.data.err_str || (e as Error).message,
				status: 'error'
			});
		}

		console.error(e);

		return Promise.reject(e);
	}

	if (messagesContainer?.SUCCESS) {
		emitToast({
			title: messagesContainer.SUCCESS,
			status: 'success'
		});
	}

	return {
		...response.data,
		isClientResponseError: _inRange(
			response.data.status_code,
			CLIENT_ERROR_RANGE_START,
			CLIENT_ERROR_RANGE_END
		)
	};
};

export default SUPPORTED_HTTP_METHODS.reduce((fetchers: Fetchers, method: Method) => {
	fetchers[method] = fetcherFactory(method);

	return fetchers;
}, {}) as Fetchers;
