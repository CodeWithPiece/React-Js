import style from "./App.module.css";

function App() {
  return (
    <>
      <div className={style.container}>
        <div className={style.calculator}>
          <h1>250</h1>
          <input type="text" className={style.display} />
          <div className={style.buttonContainer}>
            <button type="button" className={`${style.button} btn btn-warning`}>
              AC
            </button>
            <button type="button" className={`${style.button} btn btn-warning`}>
              del
            </button>
            <button type="button" className={`${style.button} btn btn-warning`}>
              %
            </button>
            <button type="button" className={`${style.button} btn btn-warning`}>
              /
            </button>
            <button type="button" className={`${style.button} btn btn-primary`}>
              7
            </button>
            <button type="button" className={`${style.button} btn btn-primary`}>
              8
            </button>
            <button type="button" className={`${style.button} btn btn-primary`}>
              9
            </button>
            <button type="button" className={`${style.button} btn btn-warning`}>
              x
            </button>
            <button type="button" className={`${style.button} btn btn-primary`}>
              4
            </button>
            <button type="button" className={`${style.button} btn btn-primary`}>
              5
            </button>
            <button type="button" className={`${style.button} btn btn-primary`}>
              6
            </button>
            <button type="button" className={`${style.button} btn btn-warning`}>
              -
            </button>
            <button type="button" className={`${style.button} btn btn-primary`}>
              1
            </button>
            <button type="button" className={`${style.button} btn btn-primary`}>
              2
            </button>
            <button type="button" className={`${style.button} btn btn-primary`}>
              3
            </button>
            <button type="button" className={`${style.button} btn btn-warning`}>
              +
            </button>
            <button
              type="button"
              className={`${style.button} ${style.button0} btn btn-primary`}
            >
              0
            </button>
            <button type="button" className={`${style.button} btn btn-primary`}>
              .
            </button>
            <button type="button" className={`${style.button} btn btn-warning`}>
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
