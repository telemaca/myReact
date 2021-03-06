import React from "react";
import styled, { css } from "styled-components";
import { Circle } from "@styled-icons/boxicons-solid/Circle";

// import useEpisodesContext from "../contexts/EpisodesContext";
// import SmallCharacterCard from "./SmallCharacterCard";

const STATUS_COLOR = {
  Alive: "rgb(65, 194, 114)",
  Dead: "rgb(221, 78, 78)",
  unknown: "rgb(122, 113, 199)",
};

const StatusIcon = styled(Circle)`
  width: 10px;
  margin-left: 7px;
  color: ${(props) => STATUS_COLOR[props.color]};
`;

const cardText = css`
  font-family: "Roboto Mono";
  color: #fafafa;
`;

const StyledCard = styled.article`
  background-color: rgba(250, 250, 250, 0.15);
  width: 250px;
  height: 100px;
  display: flex;
  align-items: center;
  margin: 20px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 5px 8px 6px 3px rgba(0, 0, 0, 0.4);

  @media (max-width: 650px) {
    width: 100%;
  }
`;

const Container = styled.div`
  padding: 0 20px;
`;

const StyledImg = styled.img`
  width: 100px;
  height: 100px;
`;

const Title = styled.h2`
  font-family: "Pangolin";
  font-size: 18px;
  color: #fafafa;
  margin: 0;
  cursor: pointer;

  &:hover {
    color: rgb(255, 167, 2);
  }
`;

const StatusText = styled.p`
  ${cardText}
  margin: 0 0 25px 0;
  font-size: 12px;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const SmallCharacterCardList = ({ characters }) => {
  return (
    <List>
      {characters.map((character) => (
        // <SmallCharacterCard data={character} key={character.id} />
        <StyledCard key={character.id}>
          <StyledImg src={character.image} alt="" />
          <Container>
            <Title>{character.name}</Title>
            <StatusText>
              <i>{character.status}</i>
              <StatusIcon color={character.status} />
            </StatusText>
          </Container>
        </StyledCard>
      ))}
    </List>
  );
};

export default SmallCharacterCardList;
