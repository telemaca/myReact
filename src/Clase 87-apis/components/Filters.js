import React from "react";
import styled from "styled-components";
import useVisualizationContext from "../contexts/VisualizationContext";

const StyledFilter = styled.select`
  width: 150px;
  height: 40px;
  border-radius: 10px;
  font-family: "Roboto Mono";
  font-size: 18px;
  cursor: pointer;
  margin-left: 20px;
`;

const StyledLabel = styled.label`
  font-family: "Roboto Mono";
  font-size: 20px;
  color: #fafafa;
`;

const Filters = () => {
  const {
    setCurrentPage,
    setStatusFilter,
    setSpeciesFilter,
    setGenderFilter,
  } = useVisualizationContext();

  const handleStatusChange = (event) => {
    setStatusFilter(event.target.value);
    setCurrentPage(1);
  };

  const handleSpeciesChange = (event) => {
    setSpeciesFilter(event.target.value);
    setCurrentPage(1);
  };

  const handleGenderChange = (event) => {
    setGenderFilter(event.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <StyledLabel htmlFor="status">
        Filter by status:
        <StyledFilter id="status" onChange={handleStatusChange}>
          <option value="">All</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </StyledFilter>
      </StyledLabel>

      <StyledLabel htmlFor="species">
        Filter by species:
        <StyledFilter id="species" onChange={handleSpeciesChange}>
          <option value="">All</option>
          <option value="human">Human</option>
          <option value="humanoid">Humanoid</option>
          <option value="alien">Alien</option>
          <option value="robot">Robot</option>
        </StyledFilter>
      </StyledLabel>

      <StyledLabel htmlFor="gender">
        Filter by gender:
        <StyledFilter id="gender" onChange={handleGenderChange}>
          <option value="">All</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </StyledFilter>
      </StyledLabel>
    </>
  );
};

export default Filters;
