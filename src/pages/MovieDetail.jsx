import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const MovieDetail = () => {
  const [youtube, setYoutube] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const response = location.state;
  const { id } = useParams();
  console.log(response);

  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

  const BASE_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

  const getDetails = async () => {
    const { data } = await axios(BASE_URL);
    
  };
  const VIDEO_BASE_URL = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
  const getVideo = async () => {
    const { data } = await axios(VIDEO_BASE_URL);
    setYoutube(data);
    setLoading(false);
  };

  useEffect(() => {
    getDetails();
    getVideo();
    return () => {};
  }, []);

  return (
    <div className="mt-[64px]">
      <h1> asdasdasd</h1>
      {loading ? (
        "Loading"
      ) : (
        <div style={{ width: "100%", position: "sticky", top: "86px" }}>  <ReactPlayer
          url={`https://www.youtube.com/watch?v=${youtube?.results[0].key}`}
          className="react-player" style={{}}
          controls
        /> </div>
      
         

      )}
    </div>
  );
};

export default MovieDetail;
