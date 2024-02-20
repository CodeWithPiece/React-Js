import React from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const products = useLoaderData();

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <tr key={product.id}>
                    <th scope="row">{product.id}</th>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;

export const getProducts = async () => {
  try {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      return res.data.products;
    } catch (error) {
      console.log(error);
      return [];
    }
  } finally {
    console.log("Fetch executed...!!");
  }
};
