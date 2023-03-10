import React, { useState } from "react";

const Header = ({  getMovies, movieName, setMovieName }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies();
  };

  console.log(movieName)
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
              
              onChange={(e) => setMovieName(e.target.value)}
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
