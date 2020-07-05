import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Home } from "@styled-icons/fa-solid/Home";

import useCharacterContext from "../contexts/CharacterContext";
import useEpisodesContext from "../contexts/EpisodesContext";
import EpisodeCard from "./EpisodeCard";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HomeIcon = styled(Home)`
  width: 40px;
  height: 40px;
  color: #fafafa;
  position: absolute;
  cursor: pointer;
  top: 200px;
  left: 50px;
`;

const EpisodeCardControl = () => {
  const { isCharacterSelected } = useCharacterContext();

  const {
    singleEpisodeData,
    toggleIsEpisodeSelected,
    isEpisodeSelected,
    episodeCharacters,
    episodeId,
    updateEpisodeCharacters,
    updateSingleEpisodeData,
  } = useEpisodesContext();

  const [charactersData, setCharactersData] = useState([]);

  const charactersIds = episodeCharacters.map((character) =>
    character.split("/").pop()
  );

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/${episodeId}`)
      .then((response) => {
        updateSingleEpisodeData(response.data);
        updateEpisodeCharacters(response.data.characters);
      });
  }, [episodeId]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${charactersIds}`)
      .then((response) => {
        setCharactersData(response.data);
      });
  }, [episodeCharacters]);

  return (
    isEpisodeSelected &&
    !isCharacterSelected && (
      <Container>
        <HomeIcon onClick={toggleIsEpisodeSelected} />
        <EpisodeCard data={singleEpisodeData} characters={charactersData} />
      </Container>
    )
  );
};

export default EpisodeCardControl;
