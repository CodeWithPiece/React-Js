import "./App.css";
import Container from "./components/Container";
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
        <Container>
          <FoodTitle />
          <FoodItem foodData={foodItem} />
          <NotFound foodData={foodItem} title="No Data Found" />
        </Container>
        <Container>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </Container>
      </div>
    </>
  );
}

export default App;
