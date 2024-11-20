import React, { useCallback, useContext, useState } from "react";
import "../css/MovieCard.css";
import { useNavigate } from "react-router";
import Star from "./Star";
import { ProductContext } from "../Context/ProductContext.jsx";

const MovieCard = ({
  element,
  title,
  overview,
  rating,
  imgUrl,
  released,
  id,
  cartValues,
}) => {
  const navigate = useNavigate();

  const { cart, setCart } = useContext(ProductContext);

  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="movie-box"
      onDoubleClick={() => {
        navigate(`/movies/${id}`);
      }}>
      <div className="movie-box-inner-one">
        <h2 className="movie_box--heading">{title}</h2>
      </div>
      <img src={imgUrl} alt={title} className="movie_box--image" />
      <div className="movie-box-inner-two">
        <div>
          <p className="movie_box--rating">Rated as {rating}</p>
          <p className="movie_box--released">Released on {released}</p>
        </div>
        <div>
          <Star
            onClick={() => {
              setCart((prevCart) => {
                const isMovieInCart = prevCart.some(
                  (item) => item.id === element.id
                );
                if (isMovieInCart) {
                  alert("The movie is already added in the cart");
                  return prevCart;
                }
                return [...prevCart, element];
              });

              setIsActive((prev) => !prev);
            }}
            active={isActive}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
