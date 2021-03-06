import React from "react";
import "./CartoonCard.css";

const CartoonCard = props => (
  <div className="card" onClick={() => props.clickCartoon(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default CartoonCard;
