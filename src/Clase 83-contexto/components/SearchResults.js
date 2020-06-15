import React from "react";
import PokemonCard from "./PokemonCard";
import useAppContext from "../contexts/AppContext";
import useVisualizationContext from "../contexts/VisualizationContext";
import useDataContext from "../contexts/DataContext";

import styles from "./searchResults.module.scss";

const LANGUAGES = {
  Español: "Resultados:",
  English: "Results:",
};

const SearchResults = () => {
  const { language } = useAppContext();
  const { visualization, order } = useVisualizationContext();
  const { pokemons, filters } = useDataContext();

  const byChosenMethod = (a, b) => {
    if (order === "nameOrder") {
      let comparison = 0;
      if (a.name > b.name) {
        comparison = 1;
      } else if (a.name < b.name) {
        comparison = -1;
      }
      return comparison;
    } else {
      return a.num - b.num;
    }
  };

  const byChosenFilters = (pokemon) => {
    if (filters.length === 0) {
      return true;
    } else {
      if (pokemon.type.some((type) => filters.indexOf(type) !== -1)) {
        return pokemon;
      }
    }
  };

  return (
    <>
      <h2>{LANGUAGES[language]}</h2>
      <div className={`${styles[visualization]} ${styles.container}`}>
        {[...pokemons]
          .sort(byChosenMethod)
          .filter(byChosenFilters)
          .map((pokemon, index) => (
            <PokemonCard
              name={pokemon.name}
              number={pokemon.num}
              img={pokemon.img}
              types={pokemon.type}
              key={index}
            />
          ))}
      </div>
    </>
  );
};

export default SearchResults;
