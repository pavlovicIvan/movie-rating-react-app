// React
import React, { useState } from "react";
import { useDispatch } from "react-redux";

// Actions
import { getAll } from "../../redux/units/Movies";

// Style
import styles from "./SearchHeader.module.css";

// Components
import Button from "../Button/index";

const SearcHeader = ({ displayFilter, setDisplayFilter, totalResults }) => {
  const dispatch = useDispatch();
  const [inputTerm, setInputTerm] = useState("");

  const handleInputChange = (e) => {
    setInputTerm(e.target.value);
    if (e.target.value.length > 2) {
      dispatch(getAll(0, "all", e.target.value));
    } else if (e.target.value.length < 2) {
      dispatch(getAll(0, displayFilter, e.target.value));
    }
  };

  return (
    <>
      <div className={styles.searchContainer}>
        <input
          placeholder="Search everything..."
          value={inputTerm}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className={styles.header}>
        <div>
          <h1 className={styles.mainTitle}>
            {inputTerm.length < 2
              ? `Top 10 ${displayFilter === "movie" ? "movies" : "TV shows"}`
              : `Search (${totalResults} result)`}
          </h1>
        </div>
        {inputTerm.length < 2 && (
          <Button
            label={displayFilter === "movie" ? "SHOWS" : "MOVIES"}
            onClick={() => {
              displayFilter === "movie"
                ? setDisplayFilter("show")
                : setDisplayFilter("movie");
            }}
          />
        )}
      </div>
    </>
  );
};

export default SearcHeader;
