import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import {
    Box
} from "@chakra-ui/react";

const StarRating = (props) => {

    // Normally calculates score 1-100 -> this divides 100 by 10 and then divides by 2 to get a 0-5 star average rating and rounds it to the nearest integer
    const ratingScore = Math.round((props.score / 10) / 2);

    return (
        <Box>
            <StarRatingComponent
                name="rating"
                editing={false}
                starCount={5}
                value={ratingScore}
            />
        </Box>
    )
}

export default StarRating;