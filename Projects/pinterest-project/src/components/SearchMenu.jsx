import React from "react";
import { FiSearch } from "react-icons/fi";
import "./SearchMenu.css";

const SearchMenu = () => {
  return (
    <div id="search-menu">
      <FiSearch id="search-icon" size={20} />
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default SearchMenu;
