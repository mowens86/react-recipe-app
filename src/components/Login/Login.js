import React from 'react';
import LoginButton from '../UI/LoginButton/LoginButton';
import {
    Flex,
    Box,
    Stack,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';

  export default function Login() {

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            backgroundImage={`${process.env.PUBLIC_URL}/salad.jpg`}
        >
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Box
                rounded={'lg'}
                bg={useColorModeValue('white', 'gray.700')}
                boxShadow={'lg'}
                p={8}>
                <Stack spacing={4}>
                    <Heading fontSize={'4xl'}>Sign up or login</Heading>
                        <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool recipes 🍲
                        </Text>
                        <LoginButton>Login</LoginButton>
                </Stack>
            </Box>
            </Stack>
        </Flex>
    );
}