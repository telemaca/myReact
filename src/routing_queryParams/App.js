import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";

const GlobalStyle = createGlobalStyle`
body {
    font-family: Arial, Helvetica, sans-serif;
}
`;

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Redirect to="/products" />
        </Route>
        <Route exact path="/products">
          <ProductsPage />
        </Route>
        <Route exact path="/products/:productId">
          <ProductPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
