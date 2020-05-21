import React from "react";

const Title = ({ text, level = 3 }) => {
  const Title = `h${level}`;
  return <Title>{text}</Title>;
};

export default Title;
