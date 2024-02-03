import React from "react";
import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";

const Home = () => {
  const items = useSelector((state) => {
    return state.itemsReducer;
  });

  return (
    <main>
      <div className="items-container">
        {items.map((item) => {
          return <HomeItem key={item.id} item={item} />;
        })}
      </div>
    </main>
  );
};

export default Home;
