import React from 'react';
import {
    Box,
    Image,
    Center,
    VStack
  } from "@chakra-ui/react";

const Results = (props) => {


    return (
        <Box 
            w="200px" 
            h="300px" 
            boxShadow="xl" 
            p="6" 
            rounded="md" 
            bg="white" 
            border="2px" 
            borderColor="gray.100"
        >
            <Center>
                <VStack>
                    <Image 
                        src={props.image} 
                        alt={props.name} 
                        title={props.name}
                        borderRadius="full"
                        boxSize="150px"
                    />
                    <Box>
                        <p>{props.name}</p>
                    </Box>
                </VStack>
            </Center>
        </Box>
    )
}

export default Results;