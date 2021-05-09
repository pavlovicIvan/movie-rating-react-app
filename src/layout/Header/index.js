// React, Router
import React from "react";
import { useHistory } from "react-router-dom";

// Images
import logo from "../../assets/images/logo.png";

// Style
import styles from "./Header.module.css";

const Header = () => {
  const history = useHistory();

  return (
    <div className={styles.headerContainer}>
      <img
        src={logo}
        className={styles.logo}
        alt="logo"
        onClick={() => history.push("")}
        onKeyDown={() => history.push("")}
      />
    </div>
  );
};
export default Header;
