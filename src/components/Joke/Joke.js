import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    ButtonGroup,
    Text,
    Image,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
} from "@chakra-ui/react";
import axios from 'axios';

const API_KEY = process.env.REACT_APP_FOOD_API_KEY;

const Joke = (props) => {
    // States
    const [ jokeData, setJokeData ] = useState([]);
    const [ jokeTrigger, setJokeTrigger ] = useState(false);
    const [ error, setError ] = useState(false);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        getJoke();
    }, [jokeTrigger]);

    // Call joke
    const getJoke = () => {
        axios.get(`https://api.spoonacular.com/food/jokes/random?apiKey=${API_KEY}`)
            .then((res) => {
                const resJoke = res.data;
                setJokeData(resJoke);
            });
    }

    // Handle joke event
    const jokeHandler = (event) => {
        event.preventDefault();
        setJokeTrigger(!jokeTrigger);
    }

    let joke = <Text>{jokeData.text}</Text>;
    if (jokeData.text !== jokeData) {
        joke = (
            <Text>{jokeData.text}</Text>
        )
    }

    const initialFocusRef = React.useRef();

    return (
        <Box>
            <Text fontSize="3xl">Ask Jives a Food Joke!</Text>
            <Image src={`${process.env.PUBLIC_URL}/ask_jives.png`} />
            <Popover
                      initialFocusRef={initialFocusRef}
                      placement="bottom"
                      closeOnBlur={false}
            >
                <PopoverTrigger>
                    <Button>Ask Jives</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Let me tell you a joke...</PopoverHeader>
                    <PopoverBody>{joke}</PopoverBody>
                    <PopoverFooter
                        border="0"
                        d="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        pb={4}
                        >
                        <ButtonGroup size="sm">
                            <Button colorScheme="blue" ref={initialFocusRef} onClick={jokeHandler}>
                                Tell Another
                            </Button>
                        </ButtonGroup>
                    </PopoverFooter>
                </PopoverContent>
            </Popover>    
        </Box>
    )
}

export default Joke;