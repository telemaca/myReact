import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Submenu = ({ children, text, icon, isShown }) => {
  return (
    <li>
      {icon}
      {text}
      {isShown ? <FaChevronDown /> : <FaChevronUp />}
      {isShown && <ul>{children}</ul>}
    </li>
  );
};

export default Submenu;
