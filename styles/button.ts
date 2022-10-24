import { ComponentStyleConfig, StyleProps } from '@chakra-ui/react';

const disabledButtonStyle = {
	backgroundColor: 'LVL-3',
	color: 'TXT-D',

	_hover: {
		backgroundColor: '#000 !important',
		color: 'R-TXT'
	}
} as const;

const NO_OUTLINE_STYLES = {
	_focus: {
		boxShadow: 'none',
	}
} as StyleProps;

const MINIMAL_STYLES = {
	fontWeight: 'normal',

	_hover: {
		opacity: .8
	},
	...NO_OUTLINE_STYLES
} as StyleProps;

const USER_PAGE_TAB_COMMON_STYLE = {
	padding: '4px 14px',
	color: 'TXT',
	fontWeight: 'normal',
	borderRadius: '6px',
	fontSize: '14px',
	height: 'auto',
	lineHeight: '20px',
	...NO_OUTLINE_STYLES
} as StyleProps;

const buttonStyles: ComponentStyleConfig = {
	baseStyle: {
		borderRadius: '8px',
		fontSize: '16px',
		fontWeight: 600,
		color: 'R-TXT',
		outline: 'none',
		border: '2px solid transparent',
	},
	sizes: {
		mini: {
			padding: '4px 6px',
			fontSize: '12px'
		}
	},
	variants: {
		// Common variants
		solid: {
			backgroundColor: 'R-LVL-1',

			_hover: {
				backgroundColor: 'R-LVL-3'
			},

			_active: {
				color: 'TXT',
				backgroundColor: 'LVL-4'
			},

			_focus: {
				color: 'R-TXT',
				backgroundColor: 'R-LVL-3',
				outline: 'none',
				borderWidth: '2px',
				borderStyle: 'solid',
				borderColor: 'BRD-FO',
				boxShadow: 'none',

				_hover: {
					color: 'R-TXT',
					backgroundColor: 'R-LVL-4'
				}
			},

			_disabled: {
				opacity: 0.8,

				_hover: {
					backgroundColor: '#000 !important'
				}
			}
		},

		blurred: {
			backgroundColor: 'LVL-1.1',
			color: 'blurredControlColor',
			backdropFilter: 'blur(24px)',

			_focus: {
				outline: 'none',
				borderWidth: '2px',
				borderStyle: 'solid',
				borderColor: 'BRD-FO',
				boxShadow: 'none',
			},

			_disabled: {...disabledButtonStyle}
		},

		transparent: {
			backgroundColor: 'transparent',
			color: 'TXT',

			_focus: {
				outline: 'none',
				boxShadow: 'none'
			},

			_disabled: {
				opacity: 0.5,
				pointerEvents: 'none'
			}
		},

		minimal: MINIMAL_STYLES,

		outline: {
			backgroundColor: 'transparent',
			color: 'TXT-M',
			borderWidth: '1px',
			borderStyle: 'solid',
			borderColor: 'BRD-M',

			_hover: {
				backgroundColor: 'LVL-3',
				color: 'TXT',
				borderColor: 'BRD'
			},

			_focus: {
				borderColor: 'BRD',
				boxShadow: 'none',
				backgroundColor: 'transparent',
				color: 'TXT'
			},

			_active: {
				backgroundColor: 'R-LVL-1',
				color: 'R-TXT'
			},

			_disabled: {
				...disabledButtonStyle,
				borderColor: 'rgba(255, 255, 255, .1)',

				_hover: {
					...disabledButtonStyle._hover,
					borderColor: 'rgba(255, 255, 255, .1) !important'
				}
			}
		},

		// Generic variants
		accentPurple: {
			backgroundColor: 'accentPurple',
			color: '#fff',

			_hover: {
				backgroundColor: 'accentPurpleDarken',

				_disabled: {
					backgroundColor: 'accentPurpleDarken'
				}
			},

			...NO_OUTLINE_STYLES
		},

		accentPurpleReversed: {
			backgroundColor: 'transparent',
			color: 'accentPurple',

			_hover: {
				backgroundColor: 'transparent',
				color: 'accentPurpleDarken',

				_disabled: {
					backgroundColor: 'transparent',
					color: 'accentPurpleDarken',
				}
			},

			...NO_OUTLINE_STYLES
		},

		topUpTrigger: {
			background: 'linear-gradient(90deg, #16A085 0%, #F4D03F 100%)',
			border: 'none',
			color: '#fff'
		},

		signIn: {
			backgroundColor: 'LVL-4',
			color: 'TXT',
			_hover: {
				backgroundColor: 'R-LVL-1',
				color: 'R-TXT',
			},
			_disabled: {
				backgroundColor: 'LVL-3',
				color: 'TXT-D',
				pointerEvents: 'none',
				opacity: '1',
			}
		},

		lightMode: {
			backgroundColor: '#fff',
			color: 'rgb(17, 18, 21)'
		},

		loadRecent: {
			borderRadius: 'roundedControls',
			backgroundColor: 'LVL-4',
			fontSize: '14px',
			color: 'TXT-M',
			...MINIMAL_STYLES
		},

		userPageTab: {
			...USER_PAGE_TAB_COMMON_STYLE,
			backgroundColor: 'transparent',
		},
		userPageTabSelected: {
			...USER_PAGE_TAB_COMMON_STYLE,
			backgroundColor: 'LVL-4'
		}
	},
	defaultProps: {
		variant: 'solid'
	}
};

export default buttonStyles;
