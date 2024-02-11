import React from "react";
import "./Pin.css";

const Pin = ({ image }) => {
  return (
    <div class={`card ${image.type}`}>
      <img id="img-pin" src={image.url} alt="" />
    </div>
  );
};

export default Pin;
