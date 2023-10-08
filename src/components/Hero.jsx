import React from "react";
import Button from "./button";
import BorderBtn from "./BorderBtn";

const Hero = () => {
  return (
    <div className="main">
      <nav>
        <img src="/logo.png" alt="" />
        <Button text={"Join Us"} />
      </nav>
      <div className="hero-content">
        <img src="/hero.png" alt="" />
        <div className="hero-right">
          <h2>Interact with the most affordable virtual reality experience</h2>
          <div className="hero-button">
            <Button text={"Download"} />
            <BorderBtn text={"Explore"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
