import React from "react";
import "../css/CartCard.css";

const CartCard = ({ id, title, overview, imgUrl, handleClick }) => {
  return (
    <div className="cart_card" title={title}>
      <div className="cart_img-container">
        <img src={imgUrl} alt={title} className="cart_card-img" />
      </div>
      <div className="cart_desc-container">
        <h2 className="cart_card-heading">{title}</h2>
        <p className="cart_card_overview">{overview}</p>
        <div>
          <button onClick={() => handleClick(id)} className="delete_btn">
            Remove From Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
