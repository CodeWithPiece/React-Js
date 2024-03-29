import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { redirect, useLoaderData } from "react-router-dom";

function App() {
  const auth = useLoaderData();

  return (
    <>
      <div id="div-main">
        <Navbar status={auth} />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;

export const checkAuthentication = () => {
  const email = localStorage.getItem("email");
  console.log(`Checking Authentication...!!`);
  if (email === null || email === "" || email === undefined) {
    return redirect("/");
  }
  return null;
};
