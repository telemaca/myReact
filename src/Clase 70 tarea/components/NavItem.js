import React from "react";

const NavItem = ({ children, path }) => {
  return (
    <li style={{ display: "flex" }}>
      <a href={path}>{children}</a>
    </li>
  );
};

export default NavItem;
