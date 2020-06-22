import React from "react";
import styled from "styled-components";
import useUsersContext from "../contexts/UsersContext";

const SmallUserCard = styled.li`
  background-color: #0c7c59;
  color: #ebf5ee;
  width: 300px;
  padding: 5px 30px;
  border-radius: 10px;
  cursor: pointer;
  margin: 10px;
`;

const Usuario = ({ name, lastname, company, id }) => {
  const { updateUser, showUserDetails } = useUsersContext();

  const handleClick = () => {
    updateUser(id);
    showUserDetails();
  };

  return (
    <SmallUserCard onClick={handleClick}>
      <h2>{name + " " + lastname}</h2>
      <p>{company}</p>
    </SmallUserCard>
  );
};

export default Usuario;
