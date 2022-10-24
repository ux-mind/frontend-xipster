import { default as fetchers } from './config';
import { getToken } from '@/utils';
import { ENDPOINT_NAMES } from '@/constants';
import { LogInResponse } from '@/types';

const { get, post, patch, delete: httpDelete } = fetchers;

export default {
	logIn: () => post<LogInResponse>(ENDPOINT_NAMES.APP, { token: getToken() }, null),
};
