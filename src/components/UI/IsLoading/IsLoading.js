import { Center, Container, Text } from '@chakra-ui/layout';
import { Progress } from '@chakra-ui/progress';
import React from 'react';
import Footer from '../../Footer/Footer';

export default function IsLoading() {

    return (
        <Center minH="100vh">
            <Container
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}
            >
                <Center>
                    <Text pb='5'>The Recipe App is Loading...</Text>
                </Center>
                <Progress size="xs" isIndeterminate />
            </Container>
            <Footer />
        </Center>
    )
}