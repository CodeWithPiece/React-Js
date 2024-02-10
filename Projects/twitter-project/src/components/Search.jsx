import React from "react";
import "../css/Search.css";
import { GoSearch } from "react-icons/go";

const Search = () => {
  return <div className="col-md-3">
  <div className="search-div">
    <div className="search-container">
      <GoSearch className="icon" />
      <input type="text" placeholder="Search" />
    </div>
  </div>
</div>
};

export default Search;
