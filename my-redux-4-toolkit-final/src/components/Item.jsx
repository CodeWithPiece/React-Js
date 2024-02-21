import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import "./Item.css";
import { productActions } from "../redux/slices/productSlice";

const Item = ({ product }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      cartActions.add({
        product,
      })
    );
  };

  const handleDelete = () => {
    dispatch(
      productActions.remove({
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
      <div id="btn-container">
        <button className="add-btn" onClick={handleClick}>
          Add To Cart
        </button>
        <button className="add-btn" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Item;
