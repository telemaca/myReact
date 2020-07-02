import React, { useState, useContext, createContext } from "react";

const VisualizationContext = createContext();

const VisualizationProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [isCharacterSelected, setIsCharacterSelected] = useState(false);
  const [selectedID, setSelectedID] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState({});
  const [episodes, setEpisodes] = useState([]);

  return (
    <VisualizationContext.Provider
      value={{
        characters,
        setCharacters,
        currentPage,
        setCurrentPage,
        pages,
        setPages,
        statusFilter,
        setStatusFilter,
        speciesFilter,
        setSpeciesFilter,
        genderFilter,
        setGenderFilter,
        isCharacterSelected,
        setIsCharacterSelected,
        selectedID,
        setSelectedID,
        selectedCharacter,
        setSelectedCharacter,
        episodes,
        setEpisodes,
      }}
    >
      {children}
    </VisualizationContext.Provider>
  );
};

const useVisualizationContext = () => useContext(VisualizationContext);

export { VisualizationProvider };
export default useVisualizationContext;
