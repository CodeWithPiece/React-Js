import React from "react";
import { useSelector } from "react-redux";

const Count = () => {
  const cartData = useSelector((state) => {
    return state.cartReducer;
  });
  return (
    <div>
      <h3>Cart Item: {cartData.length}</h3>
    </div>
  );
};

export default Count;
