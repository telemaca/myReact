import React from "react";
import styled, { css } from "styled-components";
import SmallCharacterCardList from "./SmallCharacterCardList";

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

const CharacterCard = ({ data, characters }) => {
  const { name, air_date, episode } = data;

  return (
    <StyledArticle>
      <Title>{name}</Title>
      <Text>
        <b>Episode:</b> {episode}
      </Text>
      <Text>
        <b>Air Date:</b> {air_date}
      </Text>
      <Text>
        <b>Characters:</b>
      </Text>
      <SmallCharacterCardList characters={characters} />
    </StyledArticle>
  );
};

export default CharacterCard;
