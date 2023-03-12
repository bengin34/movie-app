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
              controls
            />
          </div>
        )}
      </div>
      <div className="justify-center mt-12">
        <div className="grid sm:grid-cols-2 m-8  rounded-lg bg-white shadow-lg justify-center   ">
          <div className="col-span-1">
            {" "}
            <img
              className="sm:h-full md:w-full   rounded-t-lg  object-cover "
              src={`https://image.tmdb.org/t/p/w1280${response?.poster_path}`}
              alt=""
            />
          </div>

          <div className=" sm:justify-start col-span-1  md:w-72 lg:w-96  p-6">
            <h5 className="mb-2 text-xl font-medium">{response?.title}</h5>
            <p className="mb-4 text-base ">{response?.overview}</p>
            <p>Popularity: {response?.popularity}</p>{" "}
            <span>
              {" "}
              <p> Vote: {response?.vote_average}</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
