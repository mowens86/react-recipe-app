import React from 'react';
import {
    Box,
    Image
  } from "@chakra-ui/react";

const Results = (props) => {


    return (
        <Box w="200px" h="300px" bgGradient="linear(to-r, green.200, pink.500)">
            <Image src={props.image} alt={props.name} title={props.name} />
            <p>{props.name}</p>
        </Box>
    )
}

export default Results;