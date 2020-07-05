import React, { useState, useContext, createContext } from "react";

import { CharacterProvider } from "./CharacterContext";
import { PaginationProvider } from "./PaginationContext";
import { FiltersProvider } from "./FiltersContext";
import { EpisodesProvider } from "./EpisodesContext";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider>
      <CharacterProvider>
        <PaginationProvider>
          <FiltersProvider>
            <EpisodesProvider>{children}</EpisodesProvider>
          </FiltersProvider>
        </PaginationProvider>
      </CharacterProvider>
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppProvider };
export default useAppContext;
