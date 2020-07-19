import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import useCharacterContext from "../contexts/CharacterContext";
import usePaginationContext from "../contexts/PaginationContext";
import useFiltersContext from "../contexts/FiltersContext";
import useEpisodesContext from "../contexts/EpisodesContext";

import Card from "../components/Card";
import Aside from "../components/Aside";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CharactersPage = () => {
  const history = useHistory();

  const {
    characters,
    updateCharacters,
    isCharacterSelected,
    toggleIsCharacterSelected,

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

  const handleClickSelectedCharacter = (id) => {
    toggleIsCharacterSelected(!isCharacterSelected);
    updateCharacterId(id);
  };

  const handleCharacterClick = (id) => {
    history.push(`/character/${id}`);
  };

  return (
    <>
      {!isCharacterSelected && !isEpisodeSelected && (
        <>
          <Aside>
            <Filters />
          </Aside>
          <Pagination />
          <Container>
            {characters.map((character) => (
              <Card
                data={character}
                key={character.id}
                onCharacterClick={() => handleCharacterClick(character.id)}
              />
            ))}
          </Container>
        </>
      )}
    </>
  );
};

export default CharactersPage;
