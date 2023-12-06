import style from "./App.module.css";
import Calc from "./components/Calc";

function App() {
  return (
    <>
      <div className={style.container}>
        <Calc />
      </div>
    </>
  );
}

export default App;
