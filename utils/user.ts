import { default as storage } from '@/utils/storage';
import { TOKEN_STORAGE_NAME } from '@/constants';

export const getToken = () => storage.getItem(TOKEN_STORAGE_NAME);

export const setToken = (token: string) => storage.setItem(TOKEN_STORAGE_NAME, token);

export const removeToken = () => storage.removeItem(TOKEN_STORAGE_NAME);
