import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import useVisualizationContext from "../contexts/VisualizationContext";
import CharacterCard from "./CharacterCard";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CharacterCardVisualControl = () => {
  const {
    selectedCharacter,
    isCharacterSelected,
    episodes,
  } = useVisualizationContext();

  const [episodesData, setEpisodesData] = useState([]);

  const episodesIds = episodes.map((episode) => episode.split("/").pop());

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/${episodesIds}`)
      .then((response) => {
        setEpisodesData(response.data);
      });
  }, [selectedCharacter]);

  console.log(episodesData);

  return (
    <Container>
      {isCharacterSelected && (
        <CharacterCard
          imgUrl={selectedCharacter.image}
          name={selectedCharacter.name}
          status={selectedCharacter.status}
          species={selectedCharacter.species}
          gender={selectedCharacter.gender}
          type={selectedCharacter.type}
          origin={selectedCharacter.origin.name}
          location={selectedCharacter.location.name}
          episode={selectedCharacter.episode}
        />
      )}
    </Container>
  );
};

export default CharacterCardVisualControl;
