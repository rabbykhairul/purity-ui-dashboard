import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <div className="search-bar bg-white">
      <BiSearch className="color-gray-700" />
      <input placeholder="Type here..." className="color-gray-700" />
    </div>
  )
};

export default SearchBar;