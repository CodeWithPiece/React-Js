import React from "react";

const Loader = () => {
  return (
    <div className="text-center mt-4 d-flex align-items-center justify-content-center">
      <div className="spinner-border text-success me-2" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      Fetching data...!!
    </div>
  );
};

export default Loader;
