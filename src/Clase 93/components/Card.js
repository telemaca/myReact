import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Circle } from "@styled-icons/boxicons-solid/Circle";

const STATUS_COLOR = {
  Alive: "rgb(65, 194, 114)",
  Dead: "rgb(221, 78, 78)",
  unknown: "rgb(122, 113, 199)",
};

const StatusIcon = styled(Circle)`
  width: 15px;
  height: 15px;
  margin-left: 7px;
  color: ${(props) => STATUS_COLOR[props.color]};
`;

const cardText = css`
  font-family: "Roboto Mono";
  color: #fafafa;
`;

const StyledCard = styled.article`
  background-color: rgba(250, 250, 250, 0.15);
  width: 550px;
  height: 200px;
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
  padding-left: 30px;
`;

const StyledImg = styled.img`
  width: 200px;
  height: 200px;
`;

const Title = styled.h2`
  font-family: "Pangolin";
  font-size: 36px;
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
  font-size: 17px;
`;

const Text = styled.p`
  font-size: 13px;
  font-weight: 800;
  ${cardText}
`;

const Location = styled.p`
  font-size: 13px;
  ${cardText}
  cursor: pointer;

  &:hover {
    color: rgb(255, 167, 2);
  }
`;

const Card = ({ data, onCharacterClick }) => {
  const { name, image, status, location } = data;
  return (
    <StyledCard>
      <StyledImg src={image} alt="" />
      <Container>
        <Title onClick={onCharacterClick}>{name}</Title>
        <StatusText>
          {status}
          <StatusIcon color={status} />
        </StatusText>
        <Text>LAST SEEN:</Text>
        <Location>{location.name}</Location>
      </Container>
    </StyledCard>
  );
};

export default Card;
