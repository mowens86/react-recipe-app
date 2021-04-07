import React, { useState, useEffect } from 'react';
import {
    Button,
    FormControl,
    FormLabel,
    Input
  } from "@chakra-ui/react";
import { IoChevronForward } from 'react-icons/io5';
import axios from 'axios';

// const tempAPIKey = '782f37d17a444c24b640eb1fb22a7518';
const API_KEY = process.env.REACT_APP_FOOD_API_KEY;

function Searchbar() {
    // States
    const [ foodData, setFoodData ] = useState([]);
    const [ error, setError ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ search, setSearch ] = useState('Chicken');
    const [ url, setUrl ] = useState(
        `https://api.spoonacular.com/recipes/complexSearch?query=${search}&apiKey=${API_KEY}`
        );

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
            `https://api.spoonacular.com/recipes/complexSearch?query=${search}&apiKey=${API_KEY}`
            )
    }

    return (
        <section>
            <form onSubmit={searchHandler}>
                <FormControl id="search">
                    <FormLabel>Search for food</FormLabel>
                    <Input 
                        type="text" 
                        placeholder="Type here..."
                        value={search}
                        onChange={event => setSearch(event.target.value)}/>
                    <Button rightIcon={<IoChevronForward />} type="submit">Search</Button>
                </FormControl>
            </form>
        </section>
    )
}

export default Searchbar;