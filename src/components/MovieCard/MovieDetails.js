// React, Router, Redux
import React from "react";

// Star rating component
import StarRatings from "react-star-ratings";

// Style
import styles from "./MovieCard.module.css";

const MovieDetails = ({ movie }) => (
  <>
    <div className={styles.movieInfo}>
      <div className={styles.ratingDisplay}>
        <div className={styles.ratingLabel}>
          <strong> {movie?.avg_rating?.toFixed(1)} </strong>
        </div>
        <StarRatings
          rating={movie?.avg_rating || 0}
          starRatedColor="#ffd700"
          numberOfStars={5}
          starDimension={20}
          starSpacing={2}
        />
      </div>
      <div>
        <strong>Relase date:</strong>{" "}
        {new Date(movie?.release_date * 1000).toLocaleDateString("en-US")}
      </div>
      <div>
        <strong>Actors:</strong> {movie?.actors}
      </div>
      <div
        className={styles.typeDisplay}
        style={{
          backgroundColor: movie?.type === "movie" ? "#dcf4ff" : "#ffdcdc",
        }}
      >
        {movie?.type}
      </div>
    </div>
    <div className={styles.movieDescription}>{movie.description}</div>
  </>
);

export default MovieDetails;
