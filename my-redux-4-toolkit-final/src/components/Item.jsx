import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";

const Item = ({ product }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      cartActions.add({
        product,
      })
    );
  };

  return (
    <div className="item">
      <div>
        <img src={product.thumbnail} alt="" />
        <h4>{product.title}</h4>
        <p>{product.description}</p>
      </div>
      <button className="add-btn" onClick={handleClick}>
        Add To Cart
      </button>
    </div>
  );
};

export default Item;
