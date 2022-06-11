import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";

import person from "./images/kangna.webp";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card
        img={person}
        rating="5.0"
        reviewCoundt={6}
        country="India"
        title="Crying out alound with Kangna"
        price={136}
      />
      
      <Card
        img={person}
        rating="5.0"
        reviewCoundt={6}
        country="India"
        title="Crying out alound with Kangna"
        price={136}
      />
    </>
  );
}
