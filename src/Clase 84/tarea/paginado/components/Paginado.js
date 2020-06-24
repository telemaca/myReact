import React from "react";
import styled from "styled-components";
import usePaginationContext from "../contexts/PaginationContext";

import usersData from "../usersData";

const Text = styled.p`
  font-size: 26px;
  cursor: pointer;
  padding: 10px;
`;

const PageNumber = ({ children }) => {
  const { updateCurrentPage } = usePaginationContext();

  const handleClick = (event) =>
    updateCurrentPage(Number(event.target.innerText));

  return <Text onClick={handleClick}>{children}</Text>;
};

const Paginado = () => {
  const { resultsPerPage, changeResultsPerPage } = usePaginationContext();

  const handleChange = (event) =>
    changeResultsPerPage(Number(event.target.value));

  const pagesAmount = Math.ceil(usersData.length / resultsPerPage);
  const pagesArray = Array(pagesAmount).fill();

  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex" }}>
        {pagesArray.map((page, index) => (
          <PageNumber>{index + 1}</PageNumber>
        ))}
      </div>
      <div style={{ marginTop: 20 }}>
        <label htmlFor="results-numbers">Mostrar</label>
        <select id="results-numbers" onChange={handleChange}>
          <option value="7">7</option>
          <option value="10">10</option>
          <option value="13">13</option>
        </select>
      </div>
    </div>
  );
};

export default Paginado;
