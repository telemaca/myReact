import React from "react";
import styled, { css } from "styled-components";

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

const TopContainer = styled.div`
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

const BottomContainer = styled.div`
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

const List = styled.ul`
  list-style: none;
  font-family: "Roboto Mono";
  font-size: 15px;
  color: #fafafa;
`;

const Clickable = styled.span`
  &:hover {
    color: orange;
    cursor: pointer;
  }
`;

const CharacterCard = ({
  imgUrl,
  name,
  status,
  species,
  gender,
  type,
  origin,
  location,
  episode,
  children,
}) => {
  return (
    <StyledArticle>
      <TopContainer>
        <StyledImg src={imgUrl} />
        <InnerContainer>
          <Title>{name}</Title>
          <StatusText>
            <i>{status}</i>
          </StatusText>
        </InnerContainer>
      </TopContainer>
      <BottomContainer>
        <Text>
          <b>Species:</b> {species}
        </Text>
        <Text>
          <b>Gender:</b> {gender}
        </Text>
        <Text>
          <b>Type:</b> {type}
        </Text>
        <Text>
          <b>Planet of Origin:</b> <Clickable>{origin}</Clickable>
        </Text>
        <Text>
          <b>Last Known Location: </b>
          <Clickable>{location}</Clickable>
        </Text>
        <Text>
          <b>Episodes:</b>
        </Text>
        <List>
          {episode.map((episode) => (
            <li>
              <Clickable>{`${episode.name} - ${episode.episode}`}</Clickable>
            </li>
          ))}
        </List>
      </BottomContainer>
    </StyledArticle>
  );
};

export default CharacterCard;
