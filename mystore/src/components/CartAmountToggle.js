import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

function CartAmountToggle({ amounts, increment, decrement }) {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button onClick={() => decrement()}>
          <FaMinus />
        </button>
        <div className="amount-style">{amounts}</div>
        <button onClick={() => increment()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
}

export default CartAmountToggle;
