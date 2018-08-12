import React from "react";
import "./CartoonCard.css";

const CartoonCard = props => (
  <div className="card" onClick={() => props.clickCartoon(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    {/* <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
      </ul>
    </div>
    <span onClick={() => props.removeCartoon(props.id)} className="remove">
      𝘅
    </span> */}
  </div>
);

export default CartoonCard;
