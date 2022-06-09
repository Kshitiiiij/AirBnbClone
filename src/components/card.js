import React from "react";
import person from "../images/kangna.webp";
import star from "../images/star.png"

export default function card(){
    return(
        <div className="card">
            <img src={person} alt="eprson" className="card--image"/>
            <div className="card--stats">
                <img src={star} alt="star" className="card--star"/>
                <span>5.0</span>
                <span className="grey">(6)</span>
                <span className="grey">India</span>
            </div>
            <p>Let's cry together with Kangna</p>
            <p>From <b>10</b>/person</p>
        </div>
    )
}