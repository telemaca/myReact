import React from "react";

const Wrapper = ({ as = "div", children, ...props }) => {
  const Container = as;
  return <Container {...props}>{children}</Container>;
};

export default Wrapper;
