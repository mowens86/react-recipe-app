import React, { useState, useEffect } from 'react';
import { IoChevronForward } from 'react-icons/io5';
import { foodTitleCutOff } from '../Helpers/Helpers';
import Results from '../Results/Results';
import axios from 'axios';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Flex,
    Spinner,
    Center,
    Text
} from "@chakra-ui/react";


const API_KEY = process.env.REACT_APP_FOOD_API_KEY;

const Searchbar = () => {
    // States
    const [foodData, setFoodData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [url, setUrl] = useState(``);

    // Fetch data by searching for food
    useEffect(() => {
        const fetchFoodData = async () => {
            setError(false);
            setLoading(true);

            try {
                const searchResults = await axios(url);
                setFoodData(searchResults.data);
                // console.log(searchResults);
            }

            catch (err) {
                setError(true);
                console.log(err);
            }

            setLoading(false);
        };

        fetchFoodData();
    }, [url]);

    // Handle search event
    const searchHandler = (event) => {
        event.preventDefault();
        setUrl(
            `https://api.spoonacular.com/recipes/complexSearch?query=${search}&addRecipeInformation=true&instructionsRequired=true&includeIngredients&number=3&sort=healthiness&sortDirection=desc&autocomplete&apiKey=${API_KEY}` // Adjust number for amount of search results
        )
    }

    let foodResults;

    // Need to set error and loading if nothing is found for results
    if (loading) {
        foodResults = (
            <Center>
                <Spinner size="xl" color="red.500" />
            </Center>
        )
    }

    // Need to fix this error, causing too many redirects
    if (error) {
        foodResults = (
            <Center>
                <Text>Search for food...</Text>
            </Center>
        )
    }
    

    if (foodData.results !== undefined) {
        foodResults = foodData.results.map(data => ( // Loops through search results for all finds
            <Results
                key={data.id}
                name={foodTitleCutOff(data.title)}
                fullName={data.title}
                image={data.image}
                score={data.spoonacularScore}
                modalSummary={data.summary}
                modalInstructions={data.spoonacularSourceUrl}
            />
        ));
    }



    return (
        <Box>
            <form onSubmit={searchHandler}>
                <FormControl id="search">
                    <FormLabel>Search your favorite recipe</FormLabel>
                    <Flex>
                        <Input
                            type="text"
                            placeholder="Type here..."
                            value={search}
                            onChange={event => setSearch(event.target.value)}
                            borderTopRightRadius="0"
                            borderBottomRightRadius="0"
                        />
                        <Button
                            rightIcon={<IoChevronForward />}
                            type="submit"
                            borderTopLeftRadius="0"
                            borderBottomLeftRadius="0"
                            marginInlineStart="0px"
                        >
                            Search
                        </Button>
                    </Flex>
                </FormControl>
            </form>
            <Stack mt="4" direction={["column", "row"]} spacing="24px">
                {foodResults}
            </Stack>
        </Box>
    )
}

export default Searchbar;