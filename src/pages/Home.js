// React, Router, Redux
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions
import { getAll } from "../redux/units/Movies";

// Components
import SearchHeader from "../components/SearchHeader/index";
import MovieCard from "../components/MovieCard/index";
import SkeletonCard from "../components/SkeletonCard/index";
import Button from "../components/Button/index";

// Style
import styles from "./Pages.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  const [page, setPage] = useState(0);
  const [displayFilter, setDisplayFilter] = useState("movie");

  useEffect(() => {
    dispatch(getAll(page, displayFilter, ""));
  }, [page, displayFilter]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchHeader
        displayFilter={displayFilter}
        setDisplayFilter={setDisplayFilter}
        totalResults={movies.totalResults}
      />
      {movies.error?.message && (
        <div className={styles.errorMessage}>{movies.error.message}</div>
      )}
      <div>
        {movies.loading && movies.totalResults === 0 ? (
          <SkeletonCard />
        ) : (
          movies.movies?.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))
        )}
      </div>
      {page + 1 !== movies.totalPages && movies.totalPages > 1 && (
        <div className={styles.loadMoreContainer}>
          <Button label="LOAD MORE" onClick={handleLoadMore} />
        </div>
      )}
      {movies.totalResults === 0 && (
        <div className={styles.noResults}>
          No {displayFilter === "movie" ? "movies" : "shows"} to display
        </div>
      )}
    </>
  );
};
export default Home;
