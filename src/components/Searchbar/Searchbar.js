import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack
  } from "@chakra-ui/react";
import { IoChevronForward } from 'react-icons/io5';
import Results from '../Results/Results';
import axios from 'axios';


const API_KEY = process.env.REACT_APP_FOOD_API_KEY;

const Searchbar = () => {
    // States
    const [ foodData, setFoodData ] = useState([]);
    const [ error, setError ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ search, setSearch ] = useState('');
    const [ url, setUrl ] = useState(``);

    // Fetch data by searching for food
    useEffect(() => {
        const fetchFoodData = async () => {
            setError(false);
            setLoading(true);

            try {
                const searchResults = await axios(url, {withCredentials: true});
                setFoodData(searchResults.data);
                console.log(searchResults);
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
            `https://api.spoonacular.com/recipes/complexSearch?query=${search}&addRecipeInformation=true&instructionsRequired=true&includeIngredients&number=1&sort=popularity&apiKey=${API_KEY}` // Adjust number for amount of search results
            )
    }

    let foodResults;

    if (foodData.results !== undefined) {
        foodResults = foodData.results.map(data => ( // Loops through search results for all finds
            <Results
                key={data.id}
                name={data.title}
                image={data.image}
                modalSummary={data.summary}
                modalInstructions={data.analyzedInstructions[0].steps}
            />
        ));
    }
    

    return (
        <Box>
            <form onSubmit={searchHandler}>
                <FormControl id="search">
                    <FormLabel>Search your favorite recipe</FormLabel>
                    <Input 
                        type="text" 
                        placeholder="Type here..."
                        value={search}
                        onChange={event => setSearch(event.target.value)}/>
                    <Button rightIcon={<IoChevronForward />} type="submit">Search</Button>
                </FormControl>
            </form>
            <Stack mt="4" direction={["column", "row"]} spacing="24px">
                {foodResults}
            </Stack>
        </Box>
    )
}

export default Searchbar;