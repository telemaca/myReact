import React from "react";
import { FaSearch } from "react-icons/fa";
import style from "./header.module.scss";

const SearchBar = () => {
  return (
    <div className={style.wrapper}>
      <FaSearch className={style.icon} />
      <input placeholder="Search..." className={style.searchbar} />
    </div>
  );
};

export default SearchBar;
