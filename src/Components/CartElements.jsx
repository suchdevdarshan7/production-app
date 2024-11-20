import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import BackArrow from "./BackArrow";
import { useNavigate } from "react-router";
import CartCard from "./CartCard";
import CartHeader from "./CartHeader";

const CartElements = () => {
  const { cart, setCart } = useContext(ProductContext);

  const navigate = useNavigate();
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="cart_container">
      <button className="back-btn" onClick={() => navigate("/")}>
        Back
        <BackArrow />
      </button>
      <div>
        <CartHeader />
        {cart.map((el) => {
          return (
            <CartCard
              id={el.id}
              key={el.title}
              title={el.original_title}
              imgUrl={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
              overview={el.overview}
              handleClick={removeFromCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CartElements;
