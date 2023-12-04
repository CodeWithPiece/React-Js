import React from "react";
import Item from "./Item";

const FoodItem = (props) => {
  let foodItem = props.foodData;
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-11 col-md-8">
          <ul className="list-group">
            {foodItem.map((food, key) => {
              return (
                <Item
                  key={food}
                  foodItem={{ food, key }}
                  author={{ person: "Nirmal Kumar" }}
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
