import { useEffect, useState } from "react";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import axios from "axios";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

  const BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;

  const getMovies = async () => {
    try {
      const { data } = await axios(`${BASE_URL}&query=${movieName}`);
      setMovies(data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Something went wrong! Please try again later.");
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    try {
      setLoading(true);
      const { data } = await axios(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`
      );
      setMovies(data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Something went wrong! Please try again later.");
    }
  };
  const handleAlertClose = () => {
    setError(null);
  };
  return (
    <div className="mt-[64px]">
      <Header
        movieName={movieName}
        setMovieName={setMovieName}
        getMovies={getMovies}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 p-5 mx-auto">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
