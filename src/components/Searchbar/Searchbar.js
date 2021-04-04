import React from 'react';
import {
    FormControl,
    FormLabel,
    Input
  } from "@chakra-ui/react";

function Searchbar() {


    return (
        <section>
            <FormControl id="search">
                <FormLabel>Search for food</FormLabel>
                <Input type="search" placeholder="Type here..."/>
            </FormControl>
        </section>
    )
}

export default Searchbar;