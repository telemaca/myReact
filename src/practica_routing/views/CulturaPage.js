import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import SubCategoryPage from "./SubCategoryPage";

const CulturaPage = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <h1>Cultura</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </p>
      <Route path={`${path}/:subCategoryId`} component={SubCategoryPage} />
    </>
  );
};

export default CulturaPage;
