import "./App.css";

function App() {
  let foodItem = [
    "Rice",
    "Dal",
    "Salad",
    "Green Vegetables",
    "Fruits",
    "Vitamins",
  ];

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-11 col-md-8 text-center m-3">
            <h1>Healthy Foods</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-11 col-md-8">
            <div className="list-group">
              {foodItem.map((food, key) => {
                return (
                  <a
                    href="#"
                    className="list-group-item list-group-item-action"
                    key={key}
                  >
                    {food + "-" + key}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
