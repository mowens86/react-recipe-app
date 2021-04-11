import React from 'react';
import ResultModal from '../ResultModal/ResultModal';
import StarRating from '../StarRating/StarRating';
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
            w="225px" 
            maxH="310px" 
            boxShadow="xl" 
            p="4" 
            rounded="md" 
            bg="white" 
            border="1px" 
            borderColor="gray.100"
        >
            <Center>
                <VStack>
                    <Image 
                        src={props.image} 
                        alt={props.name} 
                        title={props.name}
                        borderRadius="sm"
                    />
                    <Box align="center">
                        <Text align="center" fontSize="sm">{props.name}</Text>
                        <Text align="center" fontSize="x-small" mt="1">Health Rating: {props.score}</Text>
                        <StarRating 
                            score={props.score}
                        />
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