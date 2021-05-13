import React from 'react';
import {
    Flex,
    Box,
    Stack,
    Heading,
    Text,
    useColorModeValue,
    Center
} from '@chakra-ui/react';
import LoginButton from '../UI/loginButton/LoginButton';

export default function Login() {

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
        >
            <Stack
                spacing={8}
                mx={'auto'}
                maxW={'lg'}
                py={12}
                px={6}
            >
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}
                >
                    <Stack spacing={4}>
                        <Center>
                            <Heading fontSize={'4xl'}>Welcome to Sporked</Heading>
                        </Center>
                        <Text fontSize={'lg'} color={'gray.600'}>
                            Sign up or login to enjoy all of our cool recipes 🍲
                        </Text>
                        <LoginButton>Get Started</LoginButton>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}