import React from 'react';
import Login from './components/Login/Login';
import Searchbar from './components/Searchbar/Searchbar';
import Footer from './components/Footer/Footer';
import { Box, Container } from "@chakra-ui/react";

function App() {

  return (
    <Box minH="100vh">
      <Container 
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >

      
          <Searchbar />
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
