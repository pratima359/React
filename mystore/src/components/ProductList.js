import React from "react";
import { UseFilterProductContext } from "../context/filterproductcontext";
import GridView from "./GridView";
import ListView from "./ListView";

function ProductList() {
  const { filter_Product, view_grid } = UseFilterProductContext();

  if (view_grid === true) {
    return <GridView filterProductsData={filter_Product} />;
  }
  if (view_grid === false) {
    return <ListView filterProductsData={filter_Product} />;
  }
}

export default ProductList;
