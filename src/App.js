import React from 'react';
import Login from './components/Login/Login';
import Searchbar from './components/Searchbar/Searchbar';
import Joke from './components/Joke/Joke';
import Footer from './components/Footer/Footer';
import { Box, Container } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from './components/UI/LogoutButton/LogoutButton';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <Container>Loading...</Container>

  if (!isAuthenticated) {
    return (
      <Box minH="100vh">
        <Container 
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}
            bgImage={`url(${process.env.PUBLIC_URL}/salad.jpg)`}
          >
  
            <Login/>
        </Container>
        <Footer />
      </Box>
    );
  }

  if (isAuthenticated) {
    return (
      <Box minH="100vh">
        <Container 
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}
            // bgImage={`url(${process.env.PUBLIC_URL}/salad.jpg)`}
            pb="5rem"
          >
            <Searchbar />
            <Joke />
            <LogoutButton>Logout</LogoutButton>
        </Container>
        <Footer />
      </Box>
    );
  }
}

export default App;
