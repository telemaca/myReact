import React from "react";
import useAppContext from "../contexts/AppContext";
import useDataContext from "../contexts/DataContext";
import styles from "./filters.module.scss";

const TITLE = {
  Español: "Filtros:",
  English: "Filters:",
};

const Filters = () => {
  const { language } = useAppContext();
  const { filters, setFilters } = useDataContext();

  const handleChange = (event) => {
    return event.target.checked
      ? setFilters([...filters, event.target.value])
      : setFilters(filters.filter((filter) => filter !== event.target.value));
  };

  return (
    <>
      <h3>{TITLE[language]}</h3>
      <div className={styles.filters}>
        <div>
          <input
            type="checkbox"
            id="grass"
            value="Grass"
            onClick={handleChange}
          />
          <label htmlFor="grass">Grass</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="poison"
            value="Poison"
            onChange={handleChange}
          />
          <label htmlFor="poison">Poison</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="fire"
            value="Fire"
            onChange={handleChange}
          />
          <label htmlFor="fire">Fire</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="flying"
            value="Flying"
            onChange={handleChange}
          />
          <label htmlFor="flying">Flying</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="water"
            value="Water"
            onChange={handleChange}
          />
          <label htmlFor="water">Water</label>
        </div>

        <div>
          <input type="checkbox" id="bug" value="Bug" onChange={handleChange} />
          <label htmlFor="bug">Bug</label>
        </div>
      </div>
    </>
  );
};

export default Filters;
