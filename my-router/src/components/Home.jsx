import React from "react";

const Home = () => {
  return (
    <div className="row">
      <div className="col-12 mt-5">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg"
            className="card-img-top"
            alt="dummy user"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;