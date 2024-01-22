import React from "react";

const Controls = () => {
  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button type="button" className="btn btn-danger px-4 gap-3">
        Primary button
      </button>
      <button type="button" className="btn btn-success px-4">
        Secondary
      </button>
    </div>
  );
};

export default Controls;
