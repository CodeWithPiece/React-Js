import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Loader from "../components/Loader";
import ProgressBar from "../components/ProgressBar";

const App = () => {
  const progressData = useSelector((state) => {
    return state.progressReducer;
  });
  console.log(progressData);

  return (
    <>
      <Header />
      <Loader />
      {progressData ? <ProgressBar /> : <Outlet />}
      <Footer />
    </>
  );
};

export default App;
