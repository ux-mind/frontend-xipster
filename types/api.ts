import { User } from '@/types';

interface BackendBasicResponse {
	err?: any;
	err_str?: string;
	status_code?: number;
	err_code?: number;
}

type BackendResponse<T = {}> = BackendBasicResponse & T & {
	isClientResponseError: boolean;
};

export type LogInResponse = BackendResponse<{
	me: User;
}>;

type Fetcher = <ResponseType = any>(
	url: string,
	params: any,
	messagesContainer?: APIMessagesContainer | null,
	onUploadProgress?: (progressEvent: ProgressEvent) => void,
	validateStatus?: () => boolean
) => Promise<ResponseType>;

export type Fetchers = Record<string, Fetcher>;

export interface APIMessagesContainer {
	SUCCESS?: string;
	ERROR?: string;
}
