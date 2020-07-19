import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import ProductCard from "./ProductCard";

import products from "../products";

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ProductsList = () => {
  const { search } = useLocation();

  const searchParams = new URLSearchParams(search);
  const discountFilter = searchParams.get("discount");
  const freeShippingFilter = searchParams.get("freeShipping");
  const categoryFilter = searchParams.get("category");

  console.log(categoryFilter);

  const filterShippingandDiscount = () => {
    if (discountFilter && freeShippingFilter) {
      return products
        .filter((product) => product.hasDiscount)
        .filter((product) => product.freeShipping);
    } else if (discountFilter) {
      return products.filter((product) => product.hasDiscount);
    } else if (freeShippingFilter) {
      return products.filter((product) => product.freeShipping);
    } else {
      return products;
    }
  };

  const filterByCategory = (products) => {
    switch (categoryFilter) {
      case "kitchen":
        return products.filter((product) => product.category === "Cocina");
      case "furniture":
        return products.filter((product) => product.category === "Muebles");
      case "electronics":
        return products.filter((product) => product.category === "Electrónica");
      case "bedroom":
        return products.filter((product) => product.category === "Dormitorio");
      default:
        return products;
    }
  };

  const filterProducts = () => {
    const products1 = filterShippingandDiscount();
    return filterByCategory(products1);
  };

  const filteredProducts = filterProducts();

  return (
    <div>
      <StyledList>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <ProductCard productData={product} />
          </li>
        ))}
      </StyledList>
    </div>
  );
};

export default ProductsList;
