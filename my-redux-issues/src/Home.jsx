import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchingAction } from "./redux/slices/fetchingSlice";

const Home = () => {
  const fetchData = useSelector((state) => {
    return state.fetchingReducer;
  });
  const dispatch = useDispatch();
  console.log(fetchData);

  useEffect(() => {
    dispatch(fetchingAction.setStatus());
    fetch("https://dummyjson.com/products/1")
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingAction.setStatus());
        console.log(data);
      });
  }, []);

  return (
    <div>
      <h1>{fetchData.status && "Fetching...!!"}</h1>
      <h1>{!fetchData.status && "Data Fetched"}</h1>
      <h3>Home</h3>
    </div>
  );
};

export default Home;
