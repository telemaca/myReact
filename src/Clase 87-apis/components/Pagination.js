import React from "react";
import useVisualizationContext from "../contexts/VisualizationContext";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Span = styled.span`
  background-color: ${(props) =>
    !props.color ? "rgba(250, 250, 250, 0.45)" : "rgba(250, 250, 250, 0.2)"};
  color: #fafafa;
  margin: 1px;
  line-height: 40px;
  width: 40px;
  font-family: "Roboto Mono";
  text-align: center;
  cursor: pointer;
`;

const Pagination = () => {
  const { setCurrentPage, currentPage, pages } = useVisualizationContext();
  return (
    <Container style={{ margin: "auto" }}>
      {Array(pages)
        .fill()
        .map((page, index) => (
          <Span
            onClick={() => setCurrentPage(index + 1)}
            key={index}
            color={currentPage === index + 1}
          >
            {index + 1}
          </Span>
        ))}
    </Container>
  );
};

export default Pagination;
