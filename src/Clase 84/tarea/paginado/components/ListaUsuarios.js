import React from "react";
import Usuario from "./Usuario";
import usePaginationContext from "../contexts/PaginationContext";
import UsersData from "../usersData";

const ListaUsuarios = () => {
  const { currentPage, resultsPerPage } = usePaginationContext();

  const perPage = (userData, index) => {
    if (
      index + 1 >= currentPage * resultsPerPage - (resultsPerPage - 1) &&
      index + 1 <= currentPage * resultsPerPage
    ) {
      return userData;
    }
  };

  return (
    <ul>
      {UsersData.filter(perPage).map((UserData) => (
        <Usuario
          firstname={UserData.firstname}
          lastname={UserData.lastname}
          company={UserData.company}
          email={UserData.email}
          key={UserData.id}
        />
      ))}
    </ul>
  );
};

export default ListaUsuarios;
