import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '@chakra-ui/react';

export default function LogoutButton (props) {
    const { logout  } = useAuth0();

    return (
            <Button 
                onClick={() => logout ( { returnTo: window.location.origin } )} 
                bg={'blue.400'}
                color={'white'}
                _hover={{
                bg: 'blue.500',
            }}>{props.children}</Button>
    );
}