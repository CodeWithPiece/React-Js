import React, { useEffect } from "react";
import Item from "./Item";
import { productActions } from "../redux/slices/productSlice";
import { useSelector, useDispatch } from "react-redux";

const Items = () => {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => {
    return state.productReducer;
  });
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      dispatch(
        productActions.addAll({
          productsData: data.products,
        })
      );
    };
    fetchData();
  }, []);
  return (
    <div className="item-div">
      {productsData.map((product, index) => {
        return <Item key={index} product={product} />;
      })}
    </div>
  );
};

export default Items;
