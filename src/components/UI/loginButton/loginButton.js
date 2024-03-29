import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@chakra-ui/react';

export default function LoginButton (props) {
    const { loginWithRedirect } = useAuth0();

    return (
            <Button 
                onClick={() => loginWithRedirect()} 
                bg={'blue.400'}
                color={'white'}
                _hover={{
                bg: 'blue.500',
            }}>{props.children}</Button>
    );
}