import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import useCharacterContext from "../contexts/CharacterContext";
import usePaginationContext from "../contexts/PaginationContext";
import useFiltersContext from "../contexts/FiltersContext";
import useEpisodesContext from "../contexts/EpisodesContext";

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
    updateCharacters,
    isCharacterSelected,
    toggleIsCharacterSelected,
    updateSelectedCharacter,
    selectedCharacterId,
    updateCharacterId,
  } = useCharacterContext();

  const { statusFilter, speciesFilter, genderFilter } = useFiltersContext();

  const { currentPage, updatePageAmount } = usePaginationContext();

  const { updateEpisodes, isEpisodeSelected } = useEpisodesContext();

  useEffect(() => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?page=${currentPage}&status=${statusFilter}&species=${speciesFilter}&gender=${genderFilter}`
      )
      .then((response) => {
        updateCharacters(response.data.results);
        updatePageAmount(response.data.info.pages);
      });
  }, [currentPage, statusFilter, speciesFilter, genderFilter]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${selectedCharacterId}`)
      .then((response) => {
        updateSelectedCharacter(response.data);
        updateEpisodes(response.data.episode);
      });
  }, [selectedCharacterId]);

  const handleClickSelectedCharacter = (id) => {
    toggleIsCharacterSelected();
    updateCharacterId(id);
  };

  return (
    <>
      {!isCharacterSelected && !isEpisodeSelected && (
        <>
          <Aside />
          <Pagination />
          <Container>
            {characters.map((character) => (
              <Card
                data={character}
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
