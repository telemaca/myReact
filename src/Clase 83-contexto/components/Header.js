import React from "react";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
  return (
    <header
      style={{
        height: 60,
        backgroundColor: "#c0bde6",
        display: "flex",
        alignItems: "center",
        paddingLeft: 30,
      }}
    >
      <LanguageSelector />
    </header>
  );
};

export default Header;
