import React from "react";
import ListaUsuarios from "./components/ListaUsuarios";
import ControlPaginado from "./components/ControlPaginado";
import { PaginationProvider } from "./contexts/PaginationContext";

// App
//   ListaUsuarios
//     Usuario
//   ControlPaginado
//     Paginado

const App = () => {
  return (
    <PaginationProvider>
      <div>
        <ControlPaginado />
        <ListaUsuarios />
      </div>
    </PaginationProvider>
  );
};

export default App;
