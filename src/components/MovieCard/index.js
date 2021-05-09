// React, Router, Redux
import React from "react";

// Components
import CoverPhoto from "./CoverPhoto";
import TitleDisplay from "./TitleDisplay";
import MovieDetails from "./MovieDetails";
import RatingSystem from "./RatingControl";

// Style
import styles from "./MovieCard.module.css";

const MovieCard = ({ movie, enableRating }) => (
  <div className={styles.movieCard}>
    <CoverPhoto cover={movie?.cover} />
    <div className={styles.movieCardTextContainer}>
      <TitleDisplay movie={movie} enableRating={enableRating} />
      <MovieDetails movie={movie} />
      <RatingSystem movieId={movie?.id} enableRating={enableRating} />
    </div>
  </div>
);

MovieCard.defaultProps = {
  enableRating: false,
};

export default MovieCard;
