import React from "react";
import styled from "styled-components";
import { useHistory, useLocation } from "react-router-dom";

const StyledAside = styled.aside`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const Filters = () => {
  const history = useHistory();
  const { pathname, search } = useLocation();

  console.log(pathname, search);

  const handleCategoryChange = (event) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("category", `${event.target.value}`);
    const newUrl = `${pathname}?${searchParams.toString()}`;
    history.push(newUrl);
  };

  const handleDiscountChange = (event) => {
    const searchParams = new URLSearchParams(search);
    event.target.checked
      ? searchParams.set("discount", true)
      : searchParams.delete("discount", true);
    const newUrl = `${pathname}?${searchParams.toString()}`;
    history.push(newUrl);
  };

  const handleFreeShippingChange = (event) => {
    const searchParams = new URLSearchParams(search);
    event.target.checked
      ? searchParams.set("freeShipping", true)
      : searchParams.delete("freeShipping", true);
    const newUrl = `${pathname}?${searchParams.toString()}`;
    history.push(newUrl);
  };

  const handleDeletingFiltersClick = () => history.push("/products");

  return (
    <StyledAside>
      <label htmlFor="category">
        Mostrar por categoría:
        <select id="category" onChange={handleCategoryChange}>
          <option value="electronics">Electrónica</option>
          <option value="kitchen">Cocina</option>
          <option value="furniture">Muebles</option>
          <option value="bedroom">Dormitorio</option>
        </select>
      </label>
      <label htmlFor="discount">
        Con descuento
        <input type="checkbox" id="discount" onChange={handleDiscountChange} />
      </label>
      <label htmlFor="freeShipping">
        Con envío gratis
        <input
          type="checkbox"
          id="freeShipping"
          onChange={handleFreeShippingChange}
        />
      </label>
      <label htmlFor="minPrice">
        Precio mínimo:
        <input type="number" id="minPrice" />
      </label>
      <label htmlFor="maxPrice">
        Precio máximo:
        <input type="number" id="maxPrice" />
      </label>
      <button onClick={handleDeletingFiltersClick}>BORRAR FILTROS</button>
    </StyledAside>
  );
};

export default Filters;
