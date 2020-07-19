import React from "react";
import styled from "styled-components";

import products from "../products";

const Card = styled.article`
  width: 800px;
  background-color: grey;
  border-radius: 20px;
  padding: 30px;
`;

const TAG_COLOR = {
  discount: "green",
  shipping: "blue",
};

const Container = styled.div`
  display: flex;
`;

const StyledTag = styled.div`
  width: 120px;
  height: 40px;
  color: #fafafa;
  font-weight: bold;
  line-height: 40px;
  padding-left: 15px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  margin-right: 30px;
  background-color: ${(props) => TAG_COLOR[props.color]};
`;

const DetailedProductCard = ({ id }) => {
  const selectedProduct = products.find((product) => product.id === id);

  return (
    <>
      <Card>
        <h2>{selectedProduct.name}</h2>
        <p>Precio: {selectedProduct.price}</p>
        <p>Categoría: {selectedProduct.category}</p>
        <Container>
          {selectedProduct.hasDiscount && (
            <StyledTag color="discount">Descuento!!</StyledTag>
          )}
          {selectedProduct.freeShipping && (
            <StyledTag color="shipping">Envío gratis!!</StyledTag>
          )}
        </Container>
        <p>{selectedProduct.description}</p>
        <p>Vendido por {selectedProduct.seller.name}</p>
        <p>Teléfono de contacto: {selectedProduct.seller.phone}</p>
      </Card>
    </>
  );
};

export default DetailedProductCard;
