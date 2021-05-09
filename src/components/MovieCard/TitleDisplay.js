// React, Router, Redux
import React from "react";
import { Link } from "react-router-dom";

// Style
import styles from "./MovieCard.module.css";

const TitleDisplay = ({ movie, enableRating }) => (
  <div>
    {enableRating ? (
      <div>
        <h1 className={styles.movieTitle}>{movie?.title}</h1>
      </div>
    ) : (
      <Link
        to={{
          pathname: "/singleView",
          state: movie,
        }}
      >
        <div>
          <h1 className={styles.movieTitle}>{movie?.title}</h1>
        </div>
      </Link>
    )}
  </div>
);

export default TitleDisplay;
