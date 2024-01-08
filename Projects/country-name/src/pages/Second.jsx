import React from "react";
import parse from "html-react-parser";

const Second = () => {
  let htmlContent = "<p>This is dynamic content from server</p>";
  return (
    <div>
      <h3>Second Approach</h3>
      {parse(htmlContent)}
    </div>
  );
};

export default Second;
