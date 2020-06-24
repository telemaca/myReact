import React, { createContext, useContext, useState } from "react";

const PaginationContext = createContext();

const PaginationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(10);

  const updateCurrentPage = (page) => setCurrentPage(page);

  const changeResultsPerPage = (results) => setResultsPerPage(results);

  return (
    <PaginationContext.Provider
      value={{
        currentPage,
        updateCurrentPage,
        resultsPerPage,
        changeResultsPerPage,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

const usePaginationContext = () => useContext(PaginationContext);

export { PaginationProvider };
export default usePaginationContext;
