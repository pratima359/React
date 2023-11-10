import React from "react";
import styled from "styled-components";
import ProductList from "./components/ProductList";
import Sort from "./components/Sort";
import FilterSection from "./components/FilterSection";
import { UseFilterProductContext } from "./context/filterproductcontext";

const Products = () => {
  const { filter_Product } = UseFilterProductContext();
  console.log(
    "🚀 ~ file: Products.js:10 ~ Products ~ filter_Product:",
    filter_Product
  );

  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div>
          <FilterSection />
        </div>
        <div className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Products;
const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;
