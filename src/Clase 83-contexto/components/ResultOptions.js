import React from "react";
import useAppContext from "../contexts/AppContext";
import useVisualizationContext from "../contexts/VisualizationContext";

import styles from "./resultOptions.module.scss";

const TITLE = {
  Español: "Opciones:",
  English: "Options:",
};

const SORT_BY_NUMBER = {
  Español: "Ordenar por número",
  English: "Sort by Number",
};

const SORT_BY_NAME = {
  Español: "Ordenar por nombre",
  English: "Sort by Name",
};

const SHOW_3 = {
  Español: "Mostrar 3",
  English: "Show 3",
};

const SHOW_4 = {
  Español: "Mostrar 4",
  English: "Show 4",
};

const ResultOptions = () => {
  const { language } = useAppContext();
  const { setVisualization, setOrder } = useVisualizationContext();

  const handleChange = (event) => {
    setOrder(event.target.value);
  };

  const handleClick3 = () => setVisualization("threeCards");
  const handleClick4 = () => setVisualization("fourCards");

  return (
    <div>
      <h3>{TITLE[language]}</h3>
      <div className={styles.optionsContainer}>
        <select onChange={handleChange} className={styles.optionSelect}>
          <option id="numberOrder" value="numberOrder">
            {SORT_BY_NUMBER[language]}
          </option>
          <option id="nameOrder" value="nameOrder">
            {SORT_BY_NAME[language]}
          </option>
        </select>
        <div className={styles.buttonsContainer}>
          <button onClick={handleClick3}>{SHOW_3[language]}</button>
          <button onClick={handleClick4}>{SHOW_4[language]}</button>
        </div>
      </div>
    </div>
  );
};

export default ResultOptions;
