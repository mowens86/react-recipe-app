import React from 'react';
import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
import { FaBriefcase, FaGithub } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
  
  const SocialButton = ({
    children,
    label,
    href,
    target
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        target={target}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {

    const year = new Date().getFullYear();

    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
        position="fixed"
        bottom="0"
        width="100%"
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'center' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>© {year}, Sporked was built with React by Mike Owens <Link color="teal.500" href="https://www.mowenstech.com/" target="_blank">(View Portfolio)</Link>. All rights reserved.</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Github'} href={'https://github.com/mowens86'} target="_blank">
              <FaGithub />
            </SocialButton>
            <SocialButton label={'Resume'} href={'https://www.mowenstech.com/assets/MJO_FED_Resume.pdf'} target="_blank">
              <FaBriefcase />
            </SocialButton>
            <SocialButton label={'Mail'} href={'mailto:mocoding86@gmail.com?subject=I Found You via Sporked'} target="_blank">
              <HiMail />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }