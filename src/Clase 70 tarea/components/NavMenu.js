import React from "react";

const NavMenu = ({ children, direction = "row" }) => {
  return (
    <nav>
      <ul
        style={{ display: "flex", listStyle: "none", flexDirection: direction }}
      >
        {children}
      </ul>
    </nav>
  );
};

export default NavMenu;
