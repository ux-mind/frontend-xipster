export const RESPONSIVE_MIN_WIDTH = '300px';

export const INITIAL_COLOR_MODE = 'light';
export const COLOR_MODE_LOCAL_STORAGE_KEY = 'chakra-ui-color-mode';

export const THEMES = {
	LIGHT: 'light',
	DARK: 'dark'
} as const;

export const THEME_OPPOSITES = {
	[THEMES.LIGHT]: THEMES.DARK,
	[THEMES.DARK]: THEMES.LIGHT
};
