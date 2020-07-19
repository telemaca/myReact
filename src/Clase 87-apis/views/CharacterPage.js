import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";

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

  // const [characters, setCharacters] = useState([]);
  const history = useHistory();
  const { search } = useLocation();
  console.log(search);

  useEffect(() => {
    const getCharacters = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${search}`
      );
      const data = await response.json();
      setCharacters(data.results);
    };
    getCharacters();
  }, [search]);

  const handleClick = (id) => {
    history.push(`/character/${id}`);
  };

  return (
    <Container>
      {characters.map((character) => (
        <Card onClick={() => handleClick(character.id)} key={character.id}>
          <Name>{character.name}</Name>
          <Img src={character.image} />
        </Card>
      ))}
    </Container>
  );
};

export default CharactersPage;
