import React, { useEffect } from "react";
import styled from "styled-components";

import useEpisodesContext from "../contexts/EpisodesContext";
import useCharacterContext from "../contexts/CharacterContext";

const List = styled.ul`
  list-style: none;
  font-family: "Roboto Mono";
  font-size: 15px;
  color: #fafafa;
`;

const ClickableListItem = styled.li`
  &:hover {
    color: orange;
    cursor: pointer;
  }
`;

const EpisodesList = ({ episodes }) => {
  const { updateEpisodeId, toggleIsEpisodeSelected } = useEpisodesContext();

  const { toggleIsCharacterSelected } = useCharacterContext();

  const handleClick = (id) => {
    updateEpisodeId(id);
    toggleIsEpisodeSelected();
    toggleIsCharacterSelected();
  };

  return (
    <List>
      {episodes.map((episode) => (
        <ClickableListItem
          key={episode.id}
          onClick={() => handleClick(episode.id)}
        >
          {`${episode.name} - ${episode.episode}`}
        </ClickableListItem>
      ))}
    </List>
  );
};

export default EpisodesList;
