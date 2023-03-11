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

  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

  const VIDEO_BASE_URL = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;

  const getVideo = async () => {
    const { data } = await axios(VIDEO_BASE_URL);
    setYoutube(data);
    setLoading(false);
  };

  useEffect(() => {
    getVideo();
    return () => {};
  }, []);

  return (
    <>
      {" "}
      <div className="mt-[64px] w-full ">
        <h1 className="text-center text-4xl p-4 uppercase">
          {" "}
          {response?.title}
        </h1>
        {loading ? (
          "Loading"
        ) : (
          <div
            className="flex items-center justify-center"
            style={{ width: "100%", position: "sticky", top: "86px" }}
          >
            {" "}
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${youtube?.results[0].key}`}
              className="react-player"
              style={{}}
              controls
            />
          </div>
        )}
      </div>
      <div className="flex justify-evenly mt-5 items-center ">
        <div className="w-72 h-72 mx-left ">
          <img
            src={`https://image.tmdb.org/t/p/w1280${response?.poster_path}`}
          />
        </div>
        <div className="w-48 ">
          <h1>{response?.overview}</h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
