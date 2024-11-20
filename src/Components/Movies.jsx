import React, { useContext, useEffect } from "react";
import { ProductContext } from "../Context/ProductContext.jsx";
import MovieCard from "./MovieCard";
import "../css/Movies.css";
import Footer from "./footer";

const Movies = () => {
  const {
    movie,
    setMovie,
    movies,
    setMovies,
    cart,
    setCart,
    getMovies,
    loading,
    setLoading,
  } = useContext(ProductContext);

  useEffect(() => {
    if (movie) {
      getMovies(movie);
      document.title = movie;
      return;
    }
    getMovies("Interstellar");
  }, []);

  return (
    <>
      <section className="movie_container">
        {loading && <p>Loading..</p>}

        {movies?.map((el) => {
          return (
            <MovieCard
              element={el}
              key={el.id}
              id={el.id}
              title={el.title}
              overview={el.overview}
              rating={el.vote_average.toFixed(2)}
              imgUrl={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
              released={el.release_date}
              cartValues={{ cart, setCart }}
            />
          );
        })}
      </section>
      {movie && <Footer />}
    </>
  );
};

export default Movies;
