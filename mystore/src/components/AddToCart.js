import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";

function AddToCart({ sProduct }) {
  const { id, stock, colors } = sProduct;

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const changeHandlerColor = (e) => {
    console.log("eee", e);
    setSelectedColor(e);
  };

  const incrementHandler = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  const decrementHandler = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(amount);
  };

  return (
    <Wrapper>
      <div className="colors">
        <p>
          Colors:
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: color }}
                className={
                  color === selectedColor ? " active btnStyle" : " btnStyle"
                }
                onClick={() => changeHandlerColor(color)}
              >
                {color === selectedColor ? <FaCheck /> : null}
              </button>
            );
          })}
        </p>
      </div>
      {/* increment decrement section */}
      <CartAmountToggle
        amounts={amount}
        increment={incrementHandler}
        decrement={decrementHandler}
      />
      <NavLink to="/cart">
        <Button>Add to Cart</Button>
      </NavLink>
    </Wrapper>
  );
}

export default AddToCart;

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;
