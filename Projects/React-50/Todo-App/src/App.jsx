import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { redirect } from "react-router-dom";

function App() {
  return (
    <>
      <div id="div-main">
        <Navbar />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;

export const checkAuthentication = () => {
  const name = localStorage.getItem("name");
  console.log(`Checking Authentication...!!`);
  if (name === null || name === '') {
    return redirect("/not-found");
  }
  return null;
};
