import { Method } from 'axios';

export const CLIENT_ERROR_RANGE_START = 400;
export const CLIENT_ERROR_RANGE_END = 500;

export const HTTP_METHODS = {
	GET: 'get',
	POST: 'post',
	PUT: 'put',
	PATCH: 'patch',
	DELETE: 'delete'
} as const;

export const METHODS_WITH_BODY: Method[] = [
	HTTP_METHODS.POST,
	HTTP_METHODS.PUT,
	HTTP_METHODS.PATCH,
	HTTP_METHODS.DELETE
];

export const SUPPORTED_HTTP_METHODS: Method[] = [
	HTTP_METHODS.GET,
	HTTP_METHODS.POST,
	HTTP_METHODS.PUT,
	HTTP_METHODS.PATCH,
	HTTP_METHODS.DELETE
];

export const ENDPOINT_NAMES = {
	APP: '/app',
};
