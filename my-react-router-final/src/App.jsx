import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Navbar from "./components/Navbar";
import ErrorPage from "./components/ErrorPage";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Setting from "./components/Setting";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard/" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
