import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import useVisualizationContext from "../contexts/VisualizationContext";
import Card from "./Card";
import Aside from "./Aside";
import Pagination from "./Pagination";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const VisualizationControl = () => {
  const {
    characters,
    setCharacters,
    setPages,
    currentPage,
    statusFilter,
    speciesFilter,
    genderFilter,
    isCharacterSelected,
    setIsCharacterSelected,
    setSelectedCharacter,
    selectedCharacter,
    selectedID,
    setSelectedID,
    setEpisodes,
  } = useVisualizationContext();

  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?page=${currentPage}&status=${statusFilter}&species=${speciesFilter}&gender=${genderFilter}`
      )
      .then((response) => {
        setCharacters(response.data.results);
        setPages(response.data.info.pages);
      });
  }, [currentPage, statusFilter, speciesFilter, genderFilter]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${selectedID}`)
      .then((response) => {
        setSelectedCharacter(response.data);
        setEpisodes(response.data.episode);
      });
  }, [selectedID]);

  const handleClickSelectedCharacter = (id) => {
    setIsCharacterSelected(true);
    setSelectedID(id);
  };

  return (
    <>
      {!isCharacterSelected && (
        <>
          <Aside />
          <Pagination />
          <Container>
            {characters.map((character) => (
              <Card
                charName={character.name}
                url={character.image}
                status={character.status}
                location={character.location.name}
                key={character.id}
                onUpdateSelectedCharacter={() =>
                  handleClickSelectedCharacter(character.id)
                }
              />
            ))}
          </Container>
        </>
      )}
    </>
  );
};

export default VisualizationControl;
