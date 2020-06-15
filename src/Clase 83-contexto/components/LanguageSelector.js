import React from "react";
import useAppContext from "../contexts/AppContext";

import styles from "./languageSelector.module.scss";

const LanguageSelector = () => {
  const { setLanguage } = useAppContext();

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <select onChange={handleChange} className={styles.selector}>
      <option id="Español" value="Español">
        Español
      </option>
      <option id="English" value="English">
        English
      </option>
    </select>
  );
};

export default LanguageSelector;
