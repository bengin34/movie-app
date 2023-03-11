import React from "react";
import { useNavigate } from "react-router-dom";
import defaultImg  from "../helper/movie.jpg"
import { auth } from "../auth/firebase-config";
import Swal from "sweetalert2";

const MovieCard = ({ movie }) => {

const navigate = useNavigate()

const handleClick = () => {

  return  auth.currentUser ? ( navigate(`/${movie.id}`, 
  {state:movie} )) : (
    Swal.fire({
      icon: 'warning',
      title: 'You are not logged in!',
      text: 'Please log in to continue',
      confirmButtonText: 'Log In',
    }).then(() => {
      navigate('/login');
    }))
};




  return (
    <>
      <div className="m-5 movie-card" onClick={handleClick} >
        <div> 
        <img src={  movie?.poster_path ?  `https://image.tmdb.org/t/p/w1280${movie?.poster_path}` :  defaultImg} alt="" />
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


