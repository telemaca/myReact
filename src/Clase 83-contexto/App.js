import React from "react";
import { AppProvider } from "./contexts/AppContext";
import { DataProvider } from "./contexts/DataContext";
import Header from "./components/Header";
import Main from "./components/Main";
import Aside from "./components/Aside";
import Container from "./components/Container";
import styles from "./app.module.scss";

// Header
//   LanguageSelector
// Aside
//   Filters
// Main
//   ResultOptions
//   SearchResults

const App = () => {
  return (
    <AppProvider>
      <DataProvider>
        <Header />
        <Container className={styles.mainContainer}>
          <Aside />
          <Main />
        </Container>
      </DataProvider>
    </AppProvider>
  );
};

export default App;
