import React from "react";
import star from "../images/star.png";

export default function card(props) {
  {
    console.log(props);
  }
  return (
    <div className="card">
      <img src={props.img} alt="eprson" className="card--image" />
      <div className="card--stats">
        <img src={star} alt="star" className="card--star" />
        <span>{props.rating}</span>
        <span className="grey">(6)</span>
        <span className="grey">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        From <b>{props.price}</b>/person
      </p>
    </div>
  );
}
