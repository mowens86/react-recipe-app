import React from 'react';
import ResultModal from '../ResultModal/ResultModal';
import {
    Box,
    Image,
    Center,
    Text,
    VStack
  } from "@chakra-ui/react";

const Results = (props) => {


    return (
        <Box 
            w="200px" 
            h="250px" 
            boxShadow="xl" 
            p="4" 
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
                        boxSize="100px"
                    />
                    <Box>
                        <Text align="center">{props.name}</Text>
                        <ResultModal
                            modalName={props.name}
                            modalSummary={props.modalSummary}
                            modalInstructions={props.modalInstructions}
                            modalImage={props.image}
                         />
                    </Box>
                </VStack>
            </Center>
        </Box>
    )
}

export default Results;