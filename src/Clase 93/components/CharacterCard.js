import React, { useEffect, useState } from "react";
import axios from "axios";
import styled, { css } from "styled-components";
import { Home } from "@styled-icons/fa-solid/Home";
import { Circle } from "@styled-icons/boxicons-solid/Circle";

import useCharacterContext from "../contexts/CharacterContext";
import useEpisodesContext from "../contexts/EpisodesContext";
// import CharacterCard from "./CharacterCard";
import EpisodesList from "./EpisodesList";

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

const STATUS_COLOR = {
  Alive: "rgb(65, 194, 114)",
  Dead: "rgb(221, 78, 78)",
  unknown: "rgb(122, 113, 199)",
};

const StatusIcon = styled(Circle)`
  width: 20px;
  height: 20px;
  margin-left: 7px;
  color: ${(props) => STATUS_COLOR[props.color]};
`;

const simpleText = css`
  color: #fafafa;
  font-family: "Roboto Mono";
`;

const StyledArticle = styled.article`
  background-color: rgba(250, 250, 250, 0.15);
  width: 600px;
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
  font-size: 40px;
  color: #fafafa;
  margin: 0;
  text-align: center;
  padding: 0 15px;
`;

const Text = styled.p`
  ${simpleText}
  font-size: 15px;
`;

const CharacterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 300px;
`;

const InnerContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CharacterDetails = styled.div`
  padding: 20px 0 20px 40px;
`;

const StyledImg = styled.img`
  border-bottom-right-radius: 10px;
`;

const StatusText = styled.p`
  ${simpleText}
  font-size: 20px;
  margin: 25px 0 0 0;
`;

const Clickable = styled.span`
  &:hover {
    color: orange;
    cursor: pointer;
  }
`;

const CharacterCard = () => {
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
        {/* <CharacterCard data={selectedCharacter} episodes={episodesData} /> */}
        <StyledArticle>
          <CharacterInfo>
            <StyledImg src={selectedCharacter.image} />
            <InnerContainer>
              <Title>{selectedCharacter.name}</Title>
              <StatusText>
                <i>{selectedCharacter.status}</i>
                <StatusIcon color={selectedCharacter.status} />
              </StatusText>
            </InnerContainer>
          </CharacterInfo>
          <CharacterDetails>
            <Text>
              <b>Species:</b> {selectedCharacter.species}
            </Text>
            <Text>
              <b>Gender:</b> {selectedCharacter.gender}
            </Text>
            <Text>
              <b>Type:</b> {selectedCharacter.type}
            </Text>
            <Text>
              <b>Planet of Origin:</b>{" "}
              <Clickable>{selectedCharacter.origin.name}</Clickable>
            </Text>
            <Text>
              <b>Last Known Location: </b>
              <Clickable>{selectedCharacter.location.name}</Clickable>
            </Text>
            <Text>
              <b>Episodes:</b>
            </Text>
            <EpisodesList episodes={episodesData} />
          </CharacterDetails>
        </StyledArticle>
      </Container>
    )
  );
};

export default CharacterCard;
