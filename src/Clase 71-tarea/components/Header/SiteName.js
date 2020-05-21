import React from "react";
import logo from "./logo.jpg";
import style from "./header.module.scss";

const SiteName = ({ children }) => {
  return (
    <div className={style.name}>
      <img src={logo} />
      <h2>{children}</h2>
    </div>
  );
};

export default SiteName;
