import React from "react";
import Item from "./Item";
import FoodInput from "./FoodInput";
import { useState } from "react";

const FoodItem = (props) => {
  // let foodItem = props.foodData;

  let [currentText, setCurrentText] = useState();
  let [selectedFood, setselectedFood] = useState([]);
  let [foodItems, setFoodItems] = useState([
    "Rice",
    "Dal",
    "Salad",
    "Green Vegetables",
    "Fruits",
    "Vitamins",
  ]);

  function clickMe(food, event) {
    let foodBought = [...selectedFood, food];
    setselectedFood(foodBought);
    console.log(`${food} is being bought`);
  }

  function foodInput(event) {
    //For Add Buttons
    // setCurrentText(event.target.value);

    // For keyDown
    if (event.key === "Enter") {
      if (event.target.value === undefined || event.target.value === "") {
        console.log("No food to add");
      } else {
        // setCurrentText(event.target.value);
        let newItem = event.target.value;
        let newFoodItems = [...foodItems, newItem];
        setFoodItems(newFoodItems);
        event.target.value = "";
        console.log(event.target.value);
      }
    }
  }

  function getNewFood() {
    if (currentText === undefined || currentText === "") {
      console.log("No Food Added");
    } else {
      let newItem = currentText;
      let newFoodItems = [...foodItems, newItem];
      setFoodItems(newFoodItems);
      setCurrentText("");
      console.log(`Your added food is ${currentText}`);
    }
  }

  return (
    <>
      <div className="row justify-content-center align-items-center">
        <FoodInput handleInput={foodInput} handleClick={getNewFood} />
        <div className="col-11 col-md-8 mt-2">
          <p>{currentText}</p>
        </div>
        <div className="col-11 col-md-8 mt-2">
          <ul className="list-group">
            {foodItems.map((food, key) => {
              return (
                <Item
                  key={food}
                  foodItem={{ food, key }}
                  author={{ person: "Nirmal Kumar" }}
                  bought={selectedFood.includes(food)}
                  handleClick={(event) => {
                    clickMe(food, event);
                  }}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
