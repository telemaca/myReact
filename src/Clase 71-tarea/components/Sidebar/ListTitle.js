import React from "react";
import style from "./sidebar.module.scss";

const ListTitle = ({ text, level = 3 }) => {
  const Title = `h${level}`;
  return <Title>{text}</Title>;
};

export default ListTitle;
