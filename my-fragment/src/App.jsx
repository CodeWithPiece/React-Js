import "./App.css";
import NotFound from "./components/NotFound";

function App() {
  let foodItem = [
    "Rice",
    "Dal",
    "Salad",
    "Green Vegetables",
    "Fruits",
    "Vitamins",
  ];

  let noFood = foodItem.length === 0 ? <NotFound /> : null;

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
            {noFood}
            <div className="list-group">
              {foodItem.map((food, key) => {
                return (
                  <a
                    href="#"
                    className="list-group-item list-group-item-action list-group-item-info"
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
