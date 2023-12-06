import style from "./App.module.css";
import Calculator from "./components/Calculator";

function App() {
  return (
    <>
      <div className={style.container}>
        <Calculator/>
      </div>
    </>
  );
}

export default App;
