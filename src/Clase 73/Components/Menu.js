import React from "react";
import MenuItem from "Clase 72/components/ListItem";
import Submenu from "Clase 72/components/Submenu";

const Menu = ({ children }) => {
  return <ul>{children}</ul>;
};

Menu.Item = MenuItem;
Menu.Submenu = Submenu;

export { MenuItem, Submenu };
export default Menu;
