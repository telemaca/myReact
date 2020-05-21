import React from "react";
import style from "./sidebar.module.scss";
import ListTitle from "./ListTitle";
import List from "./List";
import ListItem from "./ListItem";
import TextAction from "./TextAction";

const Sidebar = ({ children }) => {
  return <aside>{children}</aside>;
};

Sidebar.ListTitle = ListTitle;
Sidebar.List = List;
Sidebar.ListItem = ListItem;
Sidebar.TextAction = TextAction;

export default Sidebar;
