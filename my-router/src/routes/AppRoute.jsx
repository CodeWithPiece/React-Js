import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import NotFound from "../components/NotFound";
import Users from "../components/Users";
import UserDetails from "../components/UserDetails";

const AppRoute = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
