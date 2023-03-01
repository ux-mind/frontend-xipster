import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints, BaseBreakpointConfig } from '@chakra-ui/theme-tools';

import { INITIAL_COLOR_MODE } from '@/constants';

type ColorsConfig = Record<string, [string, string] | [string]>;

const getThemedColors = (colorsConfig: ColorsConfig) => Object.keys(colorsConfig).reduce((config, current) => {
	const currentConfig = colorsConfig[current];
	const _light = currentConfig[0];

	config[current] = {
		_light,
		_dark: currentConfig.length === 2 ? currentConfig[1] : _light
	};

	return config;
}, {} as any);

interface Breakpoints extends BaseBreakpointConfig {
	xs: string;
}

const breakpoints = createBreakpoints<Breakpoints>({
	xs: '320px',
	sm: '550px',
	md: '768px',
	lg: '960px',
	xl: '1200px',
	'2xl': '1536px',
});

const theme = extendTheme({
	initialColorMode: INITIAL_COLOR_MODE,
	useSystemColorMode: false,
	fonts: {
		body: 'Poppins, sans-serif',
		heading: 'Poppins, sans-serif',
	},
	breakpoints,
	radii: {
		roundedControls: '100px'
	},
	semanticTokens: {
		colors: getThemedColors({
			// LVL colors
			'COLOR-1': ['#fff', 'rgb(17, 18, 21)'],
			'COLOR-1.1': ['rgba(255, 255, 255, 0.16)', 'rgba(17, 18, 21, 0.3)'],
			'COLOR-2': ['rgb(243, 243, 243)', 'rgb(29, 30, 33)'],
			'COLOR-2.1': ['rgba(243, 243, 243, 0.8)', 'rgb(29, 30, 33, 0.8)'],
			'COLOR-3': ['rgb(231, 231, 232)', 'rgb(41, 41, 45)'],
			'COLOR-4': ['rgb(219, 219, 220)', 'rgb(53, 54, 57)'],
		})
	},
	styles: {
		global: {
			body: {
				backgroundColor: 'COLOR-1'
			}
		}
	},
});

export default theme;
