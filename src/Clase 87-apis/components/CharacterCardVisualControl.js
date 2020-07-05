import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Home } from "@styled-icons/fa-solid/Home";

import useCharacterContext from "../contexts/CharacterContext";
import useEpisodesContext from "../contexts/EpisodesContext";
import CharacterCard from "./CharacterCard";

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

const CharacterCardVisualControl = () => {
  const {
    selectedCharacter,
    isCharacterSelected,
    toggleIsCharacterSelected,
  } = useCharacterContext();

  const { episodes } = useEpisodesContext();

  const [episodesData, setEpisodesData] = useState([]);

  const episodesIds = episodes.map((episode) => episode.split("/").pop());

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/${episodesIds}`)
      .then((response) => {
        const dataArray =
          episodesIds.length === 1
            ? Array(1).fill(response.data)
            : response.data;
        setEpisodesData(dataArray);
      });
  }, [episodes]);

  return (
    isCharacterSelected && (
      <Container>
        <HomeIcon onClick={toggleIsCharacterSelected} />
        <CharacterCard data={selectedCharacter} episodes={episodesData} />
      </Container>
    )
  );
};

export default CharacterCardVisualControl;
