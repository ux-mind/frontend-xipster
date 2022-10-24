import { IS_CLIENT } from '@/constants';

const getItem: typeof localStorage.getItem = (key) => {
	if (!IS_CLIENT) {
		return null;
	}

	return localStorage.getItem(key);
};

const setItem: typeof localStorage.setItem = (key, value) => {
	if (!IS_CLIENT) {
		return;
	}

	localStorage.setItem(key, value);
};

const removeItem: typeof localStorage.removeItem = (key) => {
	if (!IS_CLIENT) {
		return;
	}

	localStorage.removeItem(key);
};

export default {
	getItem,
	setItem,
	removeItem
} as const;
