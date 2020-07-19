import React from "react";
import ProductsList from "../components/ProductsList";
import Filters from "../components/Filters";

const ProductsPage = () => {
  return (
    <>
      <Filters />
      <ProductsList />
    </>
  );
};

export default ProductsPage;
