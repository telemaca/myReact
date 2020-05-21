import React from "react";

const ListItem = ({ text, icon, rightComponent }) => {
  return (
    <li>
      {icon}
      {text}
      {rightComponent}
    </li>
  );
};

export default ListItem;
