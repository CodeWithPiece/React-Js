import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="row">
      <div className="col-12 mt-5">
        <button onClick={() => navigate("/users")}>Go To User</button>
        <button onClick={() => navigate("/about")}>Go To About</button>
        <button onClick={() => navigate("/getUrl")}>Go To Url</button>
        <button onClick={() => navigate("/home")}>Go To Home</button>
      </div>
    </div>
  );
};

export default Home;
