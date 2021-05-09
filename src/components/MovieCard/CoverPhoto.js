// React, Router, Redux
import React from "react";

// Images
import NoImage from "../../assets/images/no_img.svg";

// Style
import styles from "./MovieCard.module.css";

const CoverPhoto = ({ cover }) => (
  <div
    className={styles.movieCoverImage}
    style={{
      backgroundImage: `url(${cover || NoImage})`,
    }}
  />
);

export default CoverPhoto;
