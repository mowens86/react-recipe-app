import React from 'react';
import ResultModal from '../ResultModal/ResultModal';
import StarRating from '../StarRating/StarRating';
import {
    Box,
    Image,
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

            <VStack>
                <Image
                    src={props.image}
                    alt={props.name}
                    title={props.name}
                    borderRadius="sm"
                />
                <Box w="100%">
                    <Text fontSize="sm">{props.name}</Text>
                    <Text fontSize="x-small" mt="1">Health Rating: {props.score}</Text>
                    <StarRating
                        score={props.score}
                    />
                    <ResultModal
                        modalName={props.fullName}
                        modalSummary={props.modalSummary}
                        modalInstructions={props.modalInstructions}
                        modalImage={props.image}
                    />
                </Box>
            </VStack>

        </Box>
    )
}

export default Results;