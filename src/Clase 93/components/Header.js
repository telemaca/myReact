import React from "react";
import logo from "../imgs/logo.png";

const Header = () => {
  return (
    <header style={{ display: "flex", justifyContent: "center" }}>
      <img src={logo} alt="" />
    </header>
  );
};

export default Header;
