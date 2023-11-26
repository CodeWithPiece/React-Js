import React from "react";

const Hello = () => {
  // using {} we can embed JS expression directly into JSX.
  let name = "Nirmal Kumar";
  function getName() {
    return name;
  }

  return (
    <div>
      <h2>Hello {getName()} From Hello Component.</h2>
    </div>
  );
};

export default Hello;
