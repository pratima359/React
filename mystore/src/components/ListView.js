import React from "react";
import styled from "styled-components";
import { NumberIntoIndianCurrency } from "../funtionsutility";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";

const ListView = ({ filterProductsData }) => {
  console.log(
    "🚀 ~ file: ListView.js:8 ~ ListView ~ filterProductsData:",
    filterProductsData
  );
  return (
    <Wrapper className="section">
      <div className="container grid">
        {filterProductsData.map((curElem) => {
          return (
            <div className="card grid grid-two-column">
              <figure>
                <img src={curElem.image} alt={curElem.name} />
              </figure>

              <div className="card-data">
                <h3>{curElem.name}</h3>
                <p>{NumberIntoIndianCurrency(curElem.price)}</p>
                <p>{curElem.description.slice(0, 90)}...</p>

                <NavLink
                  to={`/singleproducts/${curElem.id}`}
                  className="btn-main"
                >
                  <Button className="btn">Read More</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default ListView;

const Wrapper = styled.section`
  padding: 9rem 0;

  .container {
    max-width: 120rem;
  }

  .grid {
    gap: 3.2rem;
  }
`;
