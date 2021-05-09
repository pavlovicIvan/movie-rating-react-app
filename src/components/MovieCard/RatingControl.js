// React, Router, Redux
import React, { useState } from "react";
import { useDispatch } from "react-redux";

// Star rating component
import StarRatings from "react-star-ratings";

// Actions
import { rate } from "../../redux/units/Movies";

// Style
import styles from "./MovieCard.module.css";

const RatingControl = ({ movieId, enableRating }) => {
  const ratedMovies = JSON.parse(localStorage.getItem("ratedMovies"));
  const dispatch = useDispatch();
  const [rating, setRating] = useState(
    ratedMovies?.find((i) => i.movie === movieId)?.rating || 0
  );

  const handleRating = (value) => {
    const user = localStorage.getItem("user");
    if (!rating)
      dispatch(
        rate(user, movieId, value, () => {
          ratedMovies.push({ user, movie: movieId, rating: value });
          localStorage.setItem("ratedMovies", JSON.stringify(ratedMovies));
          setRating(value);
        })
      );
  };

  return (
    <>
      {enableRating && (
        <div className={styles.ratingSection}>
          {ratedMovies?.find((i) => i.movie === movieId) ? (
            <>
              <p>Your rating:</p>{" "}
              <h3>
                {ratedMovies
                  ?.find((i) => i.movie === movieId)
                  .rating?.toFixed(1)}
              </h3>
            </>
          ) : (
            <>
              <p>Rate this movie:</p>{" "}
              <StarRatings
                rating={rating}
                starRatedColor="#ffd700"
                starHoverColor="#ffd700"
                changeRating={(value) => handleRating(value)}
                numberOfStars={5}
                starDimension={35}
                starSpacing={2}
              />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default RatingControl;
