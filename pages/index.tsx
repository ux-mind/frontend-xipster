import { useCallback } from 'react';
import { NextPage } from 'next';
import { Flex, Text } from '@chakra-ui/react';

import { emitToast } from '@/utils';
import { Button } from '@/components';
import { RESPONSIVE_MIN_WIDTH } from '@/constants';

const Index: NextPage = () => {
	const sayHelloWorld = useCallback(() => {
		emitToast({
			status: 'success',
			title: 'Hello world!',
		})
	}, []);

	return (
		<Flex
			minWidth={RESPONSIVE_MIN_WIDTH}
			width='100vw'
			height='100vh'
			align='center'
			justify='center'
			direction='column'
		>
			<Text fontSize='32px' marginBottom='40px'>Next Boilerplate App</Text>

			<Button onClick={sayHelloWorld}>
				Hello World
			</Button>
		</Flex>
	);
};

export default Index;
