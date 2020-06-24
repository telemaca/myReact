import React from "react";
import styled from "styled-components";
import useViewContext from "../contexts/ViewContext";

const StyledUsuario = styled.li`
  background-color: #0c7c59;
  color: #ebf5ee;
  width: 250px;
  padding: 5px 30px;
  border-radius: 10px;
  cursor: pointer;
  margin: 10px;
`;

const Usuario = ({ name, lastname, company, age, email, phone, address }) => {
  const { userDetailsShown } = useViewContext();
  return (
    <StyledUsuario>
      <h2>{name + " " + lastname}</h2>
      <p>EMPRESA: {company}</p>
      {userDetailsShown && (
        <>
          <p>Edad: {age}</p>
          <p>Email: {email}</p>
          <p>Teléfono: {phone}</p>
          <p>Dirección: {address}</p>
        </>
      )}
    </StyledUsuario>
  );
};

export default Usuario;
