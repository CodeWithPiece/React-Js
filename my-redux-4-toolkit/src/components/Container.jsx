import React from "react";

const Container = ({ children }) => {
  return (
    <div className="card text-center" style={{ width: "50%" }}>
      {children}
    </div>
  );
};

export default Container;
