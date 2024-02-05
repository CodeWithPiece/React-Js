import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="row parent-div">
          <div className="col-md-3">
            <div className="d-flex flex-column justify-content-between parent-div top-header p-1">
              <div>
                <div className="logo-container d-flex justify-content-center align-items-center">
                  <img
                    src="./images/twitlogo.svg"
                    alt="Twitter Logo"
                    className="main-logo"
                  />
                </div>
              </div>
              <div>
                <h3>asdada</h3>
              </div>
            </div>
          </div>
          <div className="col-md-9"></div>
        </div>
      </div>
    </>
  );
}

export default App;
