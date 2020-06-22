import React from "react";
import { createGlobalStyle } from "styled-components";

import ListaUsuarios from "./components/ListaUsuarios";
import ControlUsuario from "./components/ControlUsuario";
import Container from "./components/Container";
import { UsersProvider } from "./contexts/UsersContext";

const GlobalStyle = createGlobalStyle`
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    margin: 0;
    background-color: #ebf5ee;
}
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <UsersProvider>
        <Container>
          <ListaUsuarios />
          <ControlUsuario />
        </Container>
      </UsersProvider>
    </>
  );
};

export default App;
