import React from "react";
import hero from "../images/hero/hero.webp";
import heroCropped from "../images/hero/hero-cropped.webp";
import "./heroStyles.css";

export const Hero = () => {
  return (
    <picture class="contained">
      <source srcset={hero} media="(min-width: 850px)" />
      <img src={heroCropped} alt="" />
    </picture>
  );
};
