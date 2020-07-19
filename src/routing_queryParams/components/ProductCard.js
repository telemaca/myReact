import React from "react";
import styled from "styled-components";
import { Link, useRouteMatch, useHistory } from "react-router-dom";

const Card = styled.article`
  width: 300px;
  height: 200px;
  background-color: grey;
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 28px;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const TAG_COLOR = {
  discount: "green",
  shipping: "blue",
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
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
  background-color: ${(props) => TAG_COLOR[props.color]};
`;

const ProductCard = ({ productData }) => {
  const { name, price, category, hasDiscount, freeShipping, id } = productData;
  const { url } = useRouteMatch();
  const history = useHistory();

  const handleClick = () => {
    history.push(`${url}/${id}`);
  };

  return (
    <>
      <Card>
        <StyledLink to={`${url}/${id}`} onClick={handleClick}>
          {name}
        </StyledLink>
        <p>Precio: {price}</p>
        <p>Categoría: {category}</p>
        <Container>
          {hasDiscount && <StyledTag color="discount">Descuento!!</StyledTag>}
          {freeShipping && (
            <StyledTag color="shipping">Envío gratis!!</StyledTag>
          )}
        </Container>
      </Card>
    </>
  );
};

export default ProductCard;
