import React, { createContext, useContext, useState } from "react";

import usersData from "../usersData";

const UsersContext = createContext();

// Los contextos deberían tener la lógica para manejarlos, y si tienen datos complejos, tratar de no exponer setValue. Por ejemplo en Filters lo que hacés es handleChange debería ya venirte de DataContext, por ejemplo addFilter y removeFilter

const UsersProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isSelected, setIsSelected] = useState(false);

  const updateUser = (id) => {
    const selectedUser = usersData.find((userData) => userData.id === id);
    setUser(selectedUser);
  };

  const showUserDetails = () => setIsSelected(true);

  return (
    <UsersContext.Provider
      value={{ user, updateUser, isSelected, showUserDetails }}
    >
      {children}
    </UsersContext.Provider>
  );
};

const useUsersContext = () => useContext(UsersContext);

export { UsersProvider };
export default useUsersContext;
