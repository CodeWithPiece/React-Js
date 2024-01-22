import Container from "./components/Container";
import DisplayCounter from "./components/DisplayCounter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import Controls from "./components/Controls";

const App = () => {
  return (
    <div className="main-div">
      <Container>
        <Header />
        <div className="card-body">
          <DisplayCounter />
          <Controls />
        </div>
        <Footer />
      </Container>
    </div>
  );
};

export default App;
