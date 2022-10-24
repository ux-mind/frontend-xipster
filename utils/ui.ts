import { ColorMode, createStandaloneToast, UseToastOptions } from '@chakra-ui/react';

import theme from '@/styles/theme';
import {
	COLOR_MODE_LOCAL_STORAGE_KEY,
	INITIAL_COLOR_MODE,
	IS_CLIENT,
	THEMES,
} from '@/constants';

export const emitToast = (options: UseToastOptions, colorMode: ColorMode = INITIAL_COLOR_MODE) => {
	const id = (options.id || options.title) as string;
	const toast = createStandaloneToast({
		theme,
		colorMode,
		defaultOptions: {
			id,
			isClosable: true,
			variant: 'solid',
			position: 'bottom'
		}
	});

	if (!toast.isActive(id)) {
		toast(options);
	}
};

export const isLightThemeActive = () => IS_CLIENT ?
	localStorage.getItem(COLOR_MODE_LOCAL_STORAGE_KEY) === THEMES.LIGHT : false;
