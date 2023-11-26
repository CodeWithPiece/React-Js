import "./App.css";
import FoodItem from "./components/FoodItem";
import FoodTitle from "./components/FoodTitle";
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

  return (
    <>
      <div className="container">
        <FoodTitle />
        <NotFound foodData={foodItem} title="No Data Found" />
        <FoodItem foodData={foodItem} />
      </div>
    </>
  );
}

export default App;
