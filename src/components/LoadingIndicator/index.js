// React
import React from "react";

// Style
import styles from "./LoadingIndicator.module.css";

const LoadingIndicator = () => (
  <div className={styles.linearLoading}>
    <div className={styles.bar} />
  </div>
);

export default LoadingIndicator;
