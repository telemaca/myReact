import React from "react";
import CardTitle from "./CardTitle";
import CardImage from "./CardImage";
import CardText from "./CardText";

const Card = ({ children, ...props }) => {
  return <article {...props}>{children}</article>;
};

Card.CardTitle = CardTitle;
Card.CardImage = CardImage;
Card.CardText = CardText;

export default Card;
