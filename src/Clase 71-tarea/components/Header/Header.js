import React from "react";
import SearchBar from "./Searchbar";
import SiteName from "./SiteName";
import style from "./header.module.scss";

const Header = ({ children }) => {
  return <header className={style.wrapper}>{children}</header>;
};

Header.SearchBar = SearchBar;
Header.SiteName = SiteName;

export default Header;
