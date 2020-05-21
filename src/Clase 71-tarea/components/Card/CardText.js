import React from "react";
import style from "./cardText.module.scss";

const CardText = ({ text }) => {
  return <p className={style.text}>{text}</p>;
};

export default CardText;
