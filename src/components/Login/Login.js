import React from 'react';
import LoginButton from '../UI/LoginButton/LoginButton';
import LogoutButton from '../UI/LogoutButton/LogoutButton';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';

  export default function Login() {

    // Create initial sign-up page with link to login page if already have an account

    return (
        <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
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
                        <LoginButton>Get Started</LoginButton>
                        <LogoutButton>Logout</LogoutButton>
                </Stack>
            </Box>
            </Stack>
        </Flex>
    );
}