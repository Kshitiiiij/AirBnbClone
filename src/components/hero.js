import React from "react";
import carosel from "../images/carosel.png"

export default function hero(){
    return(
        <section className="hero">
            <img src={carosel} alt="" className="hero--photo"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className ="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}