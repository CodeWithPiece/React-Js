import React, { memo } from "react";

const Counter = ({ handleFun }) => {
  console.log("Counter Component...!!");
  return <div onClick={handleFun}>Counter</div>;
};

export default memo(Counter);
// export default Counter;
