import {
	ButtonProps,
	IconButtonProps,
	Button as ChakraButton,
	IconButton as ChakraIconButton,
	forwardRef
} from '@chakra-ui/react';

export const Button = forwardRef<ButtonProps, 'button'>((props, ref) => (
	<ChakraButton
		{...props}
		ref={ref}
		paddingStart={props.leftIcon && '11px'}
	/>
));

export const IconButton = forwardRef<IconButtonProps, 'button'>((props, ref) => (
	<ChakraIconButton
		ref={ref}
		{...props}
	/>
));
