import React, { useState, useContext, createContext } from "react";

const PaginationContext = createContext();

const PaginationProvider = ({ children }) => {
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const updatePageAmount = (amount) => setPages(amount);
  const updateCurrentPage = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <PaginationContext.Provider
      value={{ pages, currentPage, updatePageAmount, updateCurrentPage }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

const usePaginationContext = () => useContext(PaginationContext);

export { PaginationProvider };
export default usePaginationContext;
