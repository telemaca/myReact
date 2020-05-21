import React from "react";
import MainTitle from "./MainTitle";

const Main = ({ children }) => {
  return (
    <main style={{ backgroundColor: "rgb(215, 211, 231)" }}>{children}</main>
  );
};

Main.MainTitle = MainTitle;

export default Main;
