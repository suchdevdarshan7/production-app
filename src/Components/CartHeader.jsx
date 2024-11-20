import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import "./CartCard.jsx";

const CartHeader = () => {
  const { cart } = useContext(ProductContext);

  return (
    <div className="cart_header">
      <h3 className="cart_header--heading">Your Favourites</h3>

      {cart.length ? (
        <p className="cart_header_total">
          You have total of {cart.length} favourite movies
        </p>
      ) : (
        <p className="cart_header_total">You don't have any favourite movies</p>
      )}
    </div>
  );
};

export default CartHeader;
