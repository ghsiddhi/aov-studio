import React from "react";
import one from "../images/gallery/1.webp";
import two from "../images/gallery/2.webp";
import three from "../images/gallery/3.webp";
import four from "../images/gallery/4.webp";
import five from "../images/gallery/5.webp";
import six from "../images/gallery/6.webp";
import seven from "../images/gallery/7.webp";
import "./portfolioStyles.css";

export const Portfolio = () => {
  return (
    <section class="portfolio contained" id="portfolio">
      <h2>Portfolio</h2>
      <div class="gallery">
        <img src={one} alt="" />
        <img src={two} alt="" />
        <img src={three} alt="" />
        <img src={four} alt="" />
        <img src={five} alt="" />
        <img src={six} alt="" />
        <img src={seven} alt="" />
      </div>
    </section>
  );
};
