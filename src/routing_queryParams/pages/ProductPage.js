import React from "react";
import { useParams, useHistory } from "react-router-dom";

import DetailedProductCard from "../components/DetailedProductCard";

const ProductPage = () => {
  const { productId } = useParams();
  const history = useHistory();

  const handleClick = () => history.goBack();

  return (
    <>
      <button onClick={handleClick}>IR ATRÁS</button>
      <DetailedProductCard id={productId} />
    </>
  );
};

export default ProductPage;
