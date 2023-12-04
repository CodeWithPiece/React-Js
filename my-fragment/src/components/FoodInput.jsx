import React from "react";
import style from "./FoodInput.module.css";

const FoodInput = () => {

    let newFood = "";
    function foodInput(event){
        newFood = event.target.value;
    }

    function getNewFood(){
        if(newFood===""){
            console.log("No Food Added");
        }else{
            console.log(`Your added food is ${newFood}`);
        }
    }

  return (
    <>
      <div className="col-11 col-md-6">
        <input
          className={`${style.foodInput}`}
          placeholder="Enter food item here..."
          onChange={(event)=>{
            foodInput(event)
          }}
        />
      </div>
      <div className={` ${style.button} col-11 col-md-2`}>
        <center>
          <button type="button" className={`btn btn-success w-100`}
          onClick={getNewFood}>
            Buy
          </button>
        </center>
      </div>
    </>
  );
};

export default FoodInput;
