import React from "react";
import { ViewProvider } from "./contexts/ViewContext";

import ControlLista from "./components/ControlLista";
import ListaUsuarios from "./components/ListaUsuarios";

// App
//   ControlLista
//     ControlVista
//   ListaUsuarios
//    Usuario

const App = () => {
  return (
    <ViewProvider>
      <div>
        <ControlLista />
        <ListaUsuarios />
      </div>
    </ViewProvider>
  );
};

export default App;
