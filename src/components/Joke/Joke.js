/**
 * Spoonacular has a joke api call haha...thinking of making an Ask Jives section that tells food jokes with an image of Jives that pops out and tells a joke??
 */


import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Text

} from "@chakra-ui/react";
import axios from 'axios';

const API_KEY = process.env.REACT_APP_FOOD_API_KEY;

const Joke = (props) => {
    // States
    const [ jokeData, setJokeData ] = useState([]);
    const [ error, setError ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ url, setUrl ] = useState(``);

    // useEffect(() => {
        

        
    // }, []);

    const fetchJoke = async () => {
        setError(false);
        setLoading(true);

        try {
            const joke = await axios(`https://api.spoonacular.com/food/jokes/random?apiKey=${API_KEY}`);
            setJokeData(joke.data);
            console.log(joke.data);
        }

        catch (err) {
            setError(true);
            console.log(err);
        }

        setLoading(false);
    };

        // Handle joke event
        const jokeHandler = (event) => {
            event.preventDefault();
            fetchJoke();
        }

        let joke;
        if (jokeData !== '') {
            joke = (
                <Text>{jokeData.data}</Text>
            )
        }

    return (
        <Box>
            
            <Button onClick={jokeHandler}>Ask Jives</Button>
            
            <Box>
                {joke}
            </Box>
            
        </Box>
    )
}

export default Joke;