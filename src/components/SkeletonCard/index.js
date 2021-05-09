// React
import React from "react";

// Style
import styles from "./SkeletonCard.module.css";

const SkeletonCard = () =>
  [...Array(8)].map((v, index) => (
    <div key={index} className={styles.movieCardSkeleton} />
  ));

export default SkeletonCard;
