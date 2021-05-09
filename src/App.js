// React
import React, { useEffect } from "react";

// Styling
import "./style/App.css";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

// Router
import MainRouter from "./router/MainRouter";

const App = () => {
  useEffect(() => {
    // CREATE FAKE USER AND SETUP RATING SYSTEM
    const user = localStorage.getItem("user");
    const ratedMovies = localStorage.getItem("ratedMovies");
    if (!user) {
      localStorage.setItem(
        "user",
        Math.floor(Math.random() * 9000000000) + 1000000000
      );
    }
    if (!ratedMovies) {
      localStorage.setItem("ratedMovies", JSON.stringify([]));
    }
  }, []);

  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  );
};

export default App;
