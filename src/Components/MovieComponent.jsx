import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import BackArrow from "./BackArrow";
import { ProductContext } from "../Context/ProductContext";

import "../css/MovieComponent.css";
const MovieComponent = () => {
  const { slug: id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  async function getMovie(movieId) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=5af0ac2cb7cb7d43cf343c616f3b034c`
      );
      if (!response.ok) throw new Error("Failed to fetch movie data.");
      const data = await response.json();

      setMovie(data);
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  }

  useEffect(() => {
    if (id) {
      getMovie(id);
    }
  }, [id]);

  useEffect(() => {
    if (movie) {
      document.title = movie.title;
      const favicon =
        document.querySelector("link[rel='icon']") ||
        document.createElement("link");
      favicon.rel = "icon";
      favicon.href = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      document.head.appendChild(favicon);
    }
  }, [movie]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="top-container-movie">
      <div className="movie-main-container">
        <div className="movie-image__container">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>

        <div className="movie_desc">
          <h2 className="movie__heading--primary">{movie.title}</h2>

          <p className="movie__details desc-size " id="overview">
            {movie.overview}
          </p>
          <p className="movie__details desc-size">
            <span>Rated:</span> {movie.vote_average}
          </p>
          <p className="movie__details desc-size">
            <span>Release Date:</span> {movie.release_date}
          </p>
          <p className="movie__details desc-size">
            <span>Tagline : </span> {movie.tagline}
          </p>
          <p className="movie__details desc-size">
            {" "}
            <span>Generes:</span>
            {movie.genres.map((el) => (
              <span key={el.name}>{el.name + " "}</span>
            ))}
          </p>
          <p className="movie__details desc-size">
            <span>Produced by :</span>
            {movie.production_companies.map((el) => (
              <span>{el.name}</span>
            ))}
          </p>
          <button
            className="btn-arrow"
            onClick={(e) => {
              e.stopPropagation();
              navigate("/");
            }}>
            <BackArrow />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieComponent;
