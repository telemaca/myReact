import React from "react";
import { useParams } from "react-router-dom";

const SUBCAT_TITLES = {
  nacional: "Nacional",
  internacional: "Internacional",
  cine: "Cine",
  musica: "Música",
  teatro: "Teatro",
  museos: "Museos",
  fisica: "Física",
  astronomia: "Astronomía",
  medicina: "Medicina",
};

const SubCategoryPage = () => {
  const { subCategoryId } = useParams();
  return (
    <>
      <h2>{SUBCAT_TITLES[subCategoryId]}</h2>
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
    </>
  );
};

export default SubCategoryPage;
