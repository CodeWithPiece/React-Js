import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <div className="container">
        <div className="row parent-div">
          <Header />
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
