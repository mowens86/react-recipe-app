// import React, { useState, useEffect } from 'react';

// const Joke = (props) => {
//     // States
//     const [ jokeData, setJokeData ] = useState([]);
//     const [ error, setError ] = useState(false);
//     const [ loading, setLoading ] = useState(false);
//     const [ search, setSearch ] = useState('');
//     const [ url, setUrl ] = useState(``);

//     useEffect(() => {
//         const fetchJoke = async () => {
//             setError(false);
//             setLoading(true);

//             try {
//                 const searchResults = await axios(url);
//                 setFoodData(searchResults.data);
//                 console.log(searchResults);
//             }

//             catch (err) {
//                 setError(true);
//                 console.log(err);
//             }

//             setLoading(false);
//         };

//         fetchFoodData();
//     }, [url]);

//         // Handle search event
//         const searchHandler = (event) => {
//             event.preventDefault();
//             setUrl(
//                 `https://api.spoonacular.com/food/jokes/random?apiKey=${API_KEY}` // Adjust number for amount of search results
//                 )
//         }

//     return (
        
//     )
// }

// export default Joke;