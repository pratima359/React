import React from "react";
import { NavLink } from "react-router-dom";
import { NumberIntoIndianCurrency } from "../funtionsutility";
import styled from "styled-components";

function Product(fvalue) {
  const { id, name, image, category, price } = fvalue;

  return (
    <NavLink to={`/singleproducts/${id}`}>
      <div className="card">
        <figure>
          <img src={image} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">
              {NumberIntoIndianCurrency(price)}
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default Product;
