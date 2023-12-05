import React from "react";
import Item from "./Item";
import FoodInput from "./FoodInput";

const FoodItem = (props) => {
  let foodItem = props.foodData;

  function clickMe(food, event) {
    console.log(`${food} is being bought`);
  }

  return (
    <>
      <div className="row justify-content-center align-items-center">
        <FoodInput />
        <div className="col-11 col-md-8 mt-2">
          <ul className="list-group">
            {foodItem.map((food, key) => {
              return (
                <Item
                  key={food}
                  foodItem={{ food, key }}
                  author={{ person: "Nirmal Kumar" }}
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
