import React from "react";

const MovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <>
      <div className=" max-h-[360px] max-w-[240px] m-5 movie-card xs:mx-[100px]">
        <div
          className="h-[360px] w-full   bg-cover rounded-t  text-center overflow-hidden"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/w1280${movie?.poster_path}")`,
            backgroundSize: "contain",
          }}
          title="Woman holding a mug"
        >
          <div className="overlay">
            <div className="overlay-content">
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
