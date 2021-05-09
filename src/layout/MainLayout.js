// React
import React from "react";

// Layout elements
import Header from "./Header/index";

const MainLayout = ({ children }) => (
  <div className="layoutContainer">
    <Header />
    <div>{children}</div>
  </div>
);
export default MainLayout;
