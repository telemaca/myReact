import React, { useState, createContext, useContext } from "react";

const FiltersContext = createContext();

const FiltersProvider = ({ children }) => {
  const [statusFilter, setStatusFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");

  const showByStatus = (status) => setStatusFilter(status);
  const showBySpecies = (species) => setSpeciesFilter(species);
  const showByGender = (gender) => setGenderFilter(gender);

  return (
    <FiltersContext.Provider
      value={{
        statusFilter,
        speciesFilter,
        genderFilter,
        showByStatus,
        showBySpecies,
        showByGender,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

const useFiltersContext = () => useContext(FiltersContext);

export { FiltersProvider };
export default useFiltersContext;
