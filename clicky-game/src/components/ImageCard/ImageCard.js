import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
  <div className="card" onClick={() => props.clickImage(props.id)}>
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
    <span onClick={() => props.removeImage(props.id)} className="remove">
      𝘅
    </span> */}
  </div>
);

export default ImageCard;
