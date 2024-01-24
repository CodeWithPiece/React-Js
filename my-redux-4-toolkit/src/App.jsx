import Container from "./components/Container";
import DisplayCounter from "./components/DisplayCounter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import Controls from "./components/Controls";
import { useSelector } from "react-redux";
import Privacy from "./components/Privacy";

const App = () => {
  const privacy = useSelector((store) => {
    return store.privacy;
  });

  return (
    <div className="main-div">
      <Container>
        <Header />
        <div className="card-body">
          {privacy ? <Privacy /> : <DisplayCounter />}
          <Controls />
        </div>
        <Footer />
      </Container>
    </div>
  );
};

export default App;
