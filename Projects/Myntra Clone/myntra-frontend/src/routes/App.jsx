import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Loader from "../components/Loader";

const App = () => {
  return (
    <>
      <Header />
      <Loader />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
