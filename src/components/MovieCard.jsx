import React from "react";
import { useNavigate } from "react-router-dom";
import defaultImg  from "../helper/movie.jpg"

const MovieCard = ({ movie }) => {

const navigate = useNavigate()


  return (
    <>
      <div className="m-5 movie-card" onClick={() => navigate(`/${movie.id}`, 
      {state:{movie:movie}} )} >
        <div
          
        > <img src={`https://image.tmdb.org/t/p/w1280${movie?.poster_path}` || defaultImg} alt="" />
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
