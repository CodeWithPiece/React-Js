import React from "react";
import Second from "./Second";

const Home = () => {
  let htmlContent = "<p>This is dynamic content from server</p>";
  let content = { __html: htmlContent };
  return (
    <>
      <h3>First Approach</h3>
      <p dangerouslySetInnerHTML={content}></p>
      <Second />
    </>
  );
};

export default Home;
