import React, { useState, useContext, createContext } from "react";

const EpisodesContext = createContext();

const EpisodesProvider = ({ children }) => {
  const [episodes, setEpisodes] = useState([]);
  const [episodeId, setEpisodeId] = useState(1);
  const [singleEpisodeData, setSingleEpisodeData] = useState({});
  const [isEpisodeSelected, setIsEpisodeSelected] = useState(false);
  const [episodeCharacters, setEpisodeCharacters] = useState([]);

  const updateEpisodes = (episodes) => setEpisodes(episodes);

  const toggleIsEpisodeSelected = () =>
    setIsEpisodeSelected(!isEpisodeSelected);

  const updateEpisodeId = (id) => setEpisodeId(id);

  const updateSingleEpisodeData = (data) => setSingleEpisodeData(data);

  const updateEpisodeCharacters = (characters) =>
    setEpisodeCharacters(characters);

  return (
    <EpisodesContext.Provider
      value={{
        episodes,
        episodeId,
        singleEpisodeData,
        isEpisodeSelected,
        episodeCharacters,
        updateEpisodes,
        updateEpisodeId,
        updateSingleEpisodeData,
        toggleIsEpisodeSelected,
        updateEpisodeCharacters,
      }}
    >
      {children}
    </EpisodesContext.Provider>
  );
};

const useEpisodesContext = () => useContext(EpisodesContext);

export { EpisodesProvider };
export default useEpisodesContext;
