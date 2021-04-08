import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input
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
                const searchResults = await axios(url);
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
    }, [url])

    // Handle search event
    const searchHandler = (event) => {
        event.preventDefault();
        setUrl(
            `https://api.spoonacular.com/recipes/complexSearch?query=${search}&addRecipeInformation=true&instructionsRequired=true&includeIngredients&number=1&apiKey=${API_KEY}`
            )
    }

    let foodResults;

    if (foodData.results !== undefined) {
        const keyVariables = foodData.results[0].id;
        const foodName = foodData.results[0].title;
        const foodImage = foodData.results[0].image;
        console.log(foodName, foodImage)
        foodResults = (
            <Results
                key={keyVariables}
                name={foodName}
                image={foodImage}
            />
        );
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
            {foodResults}
        </Box>
    )
}

export default Searchbar;