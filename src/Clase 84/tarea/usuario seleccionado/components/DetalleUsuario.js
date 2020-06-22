import React from "react";
import styled from "styled-components";
import useUsersContext from "../contexts/UsersContext";

const UserCard = styled.article`
  width: 500px;
  background-color: #242121;
  color: #ebf5ee;
  border-radius: 5px;
  margin: 50px;
  padding: 15px 0 15px 35px;
`;

const Title = styled.h2`
  margin: 0;
`;

const DetalleUsuario = () => {
  const { user } = useUsersContext();
  return (
    <UserCard>
      <Title>{user.name.first + " " + user.name.last}</Title>
      <p>Edad: {user.age}</p>
      <p>EMPRESA: {user.company}</p>
      <p>Email: {user.email}</p>
      <p>Teléfono: {user.phone}</p>
      <p>Dirección: {user.address}</p>
    </UserCard>
  );
};

export default DetalleUsuario;
