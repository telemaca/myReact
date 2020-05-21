import React from "react";
import style from "./sidebar.module.scss";

const ListItem = ({ icon, text }) => {
  return (
    <li>
      {icon}
      {text}
    </li>
  );
};

export default ListItem;
