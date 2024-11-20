import React, { useContext, useEffect } from "react";
import { LoginContext } from "../Context/LoginContext.jsx";
import { ProductContext } from "../Context/ProductContext.jsx";
import "../css/Navbar.css";
import Cart from "./Cart";
import { useNavigate } from "react-router";

const Navbar = () => {
  const { currentUser, loggedIn, setLogIn } = useContext(LoginContext);

  const { movies, setMovies, movie, setMovie, getMovies, setCart } =
    useContext(ProductContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/cart", { state: { cart: 1 } });
  };

  const handleMovieChange = (e) => {
    const newMovie = e.target.value;
    setMovie(newMovie);
    getMovies(newMovie);
  };

  function handleClick() {
    setCart([]);
    setLogIn(false);
  }

  return (
    <nav>
      <h1 className="navigation__heading">Tmdb Api</h1>
      <div className="navigation">
        <div>
          <input
            type="text"
            onChange={handleMovieChange}
            placeholder="Search Movie"
          />
        </div>
        <div>
          <h2 className="navigation__currentuser">
            {currentUser?.user?.firstName}
          </h2>
        </div>
        <div>
          <Cart onClick={handleSubmit} />
        </div>
        <div>
          <button onClick={handleClick} className="logOut_btn">
            LogOut
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
