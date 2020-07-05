import React, { useState, useContext, createContext } from "react";

const CharacterContext = createContext();

const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [isCharacterSelected, setIsCharacterSelected] = useState(false);
  const [selectedCharacterId, setSelectedCharacterId] = useState(6);
  const [selectedCharacter, setSelectedCharacter] = useState({});

  const updateCharacters = (characters) => setCharacters(characters);

  const toggleIsCharacterSelected = () =>
    setIsCharacterSelected(!isCharacterSelected);

  const updateCharacterId = (id) => setSelectedCharacterId(id);

  const updateSelectedCharacter = (character) =>
    setSelectedCharacter(character);

  return (
    <CharacterContext.Provider
      value={{
        characters,
        isCharacterSelected,
        selectedCharacterId,
        selectedCharacter,
        updateCharacters,
        toggleIsCharacterSelected,
        updateCharacterId,
        updateSelectedCharacter,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

const useCharacterContext = () => useContext(CharacterContext);

export { CharacterProvider };
export default useCharacterContext;
