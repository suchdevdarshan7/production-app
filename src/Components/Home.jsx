import React, { useContext, useEffect, useState } from "react";
import Movies from "./Movies";
import Navbar from "./Navbar";
import { ProductContext } from "../Context/ProductContext";

const Home = () => {
  const { movies, setMovies, movie, setMovie, cart, setCart } =
    useContext(ProductContext);

  return (
    <div>
      <Navbar />
      <Movies />
    </div>
  );
};

export default Home;
