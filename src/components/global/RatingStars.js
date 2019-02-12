//Bishal
import React from "react";
import Rater from "react-rater";
import 'react-rater/lib/react-rater.css'

const RatingStars = props => {
  return (
    <div>
      <Rater rating={props.ratings.avgRating} total={5} interactive={false} />
      <span>{`(${props.ratings.totalReviews})`} </span>
    </div>
  );
};

export default RatingStars;
