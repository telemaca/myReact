import React, { useEffect, useState } from "react";
import axios from "axios";
import styled, { css } from "styled-components";
import { Home } from "@styled-icons/fa-solid/Home";

import useCharacterContext from "../contexts/CharacterContext";
import useEpisodesContext from "../contexts/EpisodesContext";
import SmallCharacterCardList from "./SmallCharacterCardList";

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

const simpleText = css`
  color: #fafafa;
  font-family: "Roboto Mono";
`;

const StyledArticle = styled.article`
  background-color: rgba(250, 250, 250, 0.15);
  width: 1000px;
  display: flex;
  flex-direction: column;
  margin: 20px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 5px 8px 6px 3px rgba(0, 0, 0, 0.4);

  @media (max-width: 650px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-family: "Pangolin";
  font-size: 50px;
  color: #fafafa;
  text-align: center;
`;

const Text = styled.p`
  ${simpleText}
  font-size: 15px;
  padding-left: 80px;
`;

const EpisodeCard = () => {
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
        {/* <EpisodeCard data={singleEpisodeData} characters={charactersData} /> */}
        <StyledArticle>
          <Title>{singleEpisodeData.name}</Title>
          <Text>
            <b>Episode:</b> {singleEpisodeData.episode}
          </Text>
          <Text>
            <b>Air Date:</b> {singleEpisodeData.air_date}
          </Text>
          <Text>
            <b>Characters:</b>
          </Text>
          <SmallCharacterCardList characters={charactersData} />
        </StyledArticle>
      </Container>
    )
  );
};

export default EpisodeCard;
