import React from "react";
import Navbar from "./components/Navbar";
import AppRoute from "./routes/AppRoute";

const App = () => {
  return (
    <AppRoute>
      <Navbar />
    </AppRoute>
  );
};

export default App;
