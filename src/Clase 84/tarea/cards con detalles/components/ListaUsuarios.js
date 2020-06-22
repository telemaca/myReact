import React from "react";
import Usuario from "./Usuario";
import usersData from "../usersData";

const ListaUsuarios = () => {
  return (
    <ul style={{ listStyle: "none", display: "flex" }}>
      {usersData.map((userData, index) => (
        <Usuario
          key={index}
          id={userData.id}
          name={userData.name.first}
          lastname={userData.name.last}
          company={userData.company}
          age={userData.age}
          email={userData.email}
          phone={userData.phone}
          address={userData.address}
        />
      ))}
    </ul>
  );
};

export default ListaUsuarios;
