import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import "./index.css";
import store from "./redux/store.jsx";
import Home from "./Home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

  // </React.StrictMode>
  <Provider store={store}>
    <Home />
  </Provider>
);
