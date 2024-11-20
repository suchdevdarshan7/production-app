import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState("");
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getMovies(movie) {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=5af0ac2cb7cb7d43cf343c616f3b034c&query=${movie}`
    );
    const data = await response.json();
    setMovies(data.results || []);
  }

  return (
    <ProductContext.Provider
      value={{
        movie,
        setMovie,
        movies,
        setMovies,
        cart,
        setCart,
        getMovies,
        loading,
        setLoading,
      }}>
      {children}
    </ProductContext.Provider>
  );
};
