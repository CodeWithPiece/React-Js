import React from "react";
import ReactDOM from "react-dom/client";
import App, { checkAuthentication } from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login, { isLoggedIn } from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import NotFound from "./components/NotFound.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Login />, loader: isLoggedIn },
  { path: "/register", element: <SignUp /> },
  { path: "/home", element: <App />, loader: checkAuthentication },
  { path: "*", element: <NotFound /> },
  { path: "/not-found", element: <NotFound /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
