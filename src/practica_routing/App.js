import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CienciaPage from "./views/CienciaPage";
import CulturaPage from "./views/CulturaPage";
import DeportesPage from "./views/DeportesPage";
import PoliticaPage from "./views/PoliticaPage";
import SociedadPage from "./views/SociedadPage";

import Aside from "./Aside";

const App = () => {
  return (
    <Router>
      <Aside />
      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        <Route exact path="/sociedad" component={SociedadPage} />
        <Route path="/politica" component={PoliticaPage} />
        <Route path="/cultura" component={CulturaPage} />
        <Route path="/ciencia" component={CienciaPage} />
        <Route exact path="/deportes" component={DeportesPage} />
      </Switch>
    </Router>
  );
};

export default App;
