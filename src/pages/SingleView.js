// React, Router
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Components
import MovieCard from "../components/MovieCard/index";

const SingleView = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <MovieCard movie={location.state} enableRating />;
};

export default SingleView;
