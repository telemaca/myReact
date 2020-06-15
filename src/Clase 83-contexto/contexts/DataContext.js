import React, { createContext, useContext, useState } from "react";

import pokemonData from "../data";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState(pokemonData);
  const [filters, setFilters] = useState([]);

  return (
    <DataContext.Provider
      value={{ pokemons, setPokemons, filters, setFilters }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useDataContext = () => useContext(DataContext);

export { DataProvider };
export default useDataContext;
