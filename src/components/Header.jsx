import React, { useState } from "react";

const Header = ({ setSearchQuery ,getMovies}) => {
  const [inputData, setInputData] = useState("");
  const handleInput = (e) => {
    setInputData(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(inputData.trim());
    getMovies()
  };
  return (
    <div className="flex justify-center align-center">
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-1 text-center items-center mb-2"></div>
        <div className="flex ">
          <div className="flex rounded-md overflow-hidden w-full">
            <label htmlFor="search-input" className="sr-only">
              Search for a movie
            </label>
            <input
              id="search-input"
              onChange={handleInput}
              type="text"
              className="w-full border border-indigo-600 rounded-md rounded-r-none px-4"
              placeholder="Search for a movie"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 text-lg font-semibold p-2 rounded-r-md"
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Header;
