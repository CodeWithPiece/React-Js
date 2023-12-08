import style from "./App.module.css";
import Calc from "./components/Calc";

function App() {
  return (
    <>
      <div className={style.container}>
        <h1>Calculator</h1>
        <Calc />
      </div>
    </>
  );
}

export default App;
