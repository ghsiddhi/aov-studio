import React from "react";
import sliderPrev from "../assets/icons/slider-prev.png";
import sliderNext from "../assets/icons/slider-next.png";
import slider1 from "../assets/slider/1.webp";
import slider2 from "../assets/slider/2.webp";
import slider3 from "../assets/slider/3.webp";
import slider4 from "../assets/slider/4.webp";
import slider5 from "../assets/slider/5.webp";
import slider6 from "../assets/slider/6.webp";
import slider7 from "../assets/slider/7.webp";
import "./aboutStyles.css";

export const About = () => {
  return (
    <div class="about contained" id="about">
      <section>
        <h2>About</h2>
        <p>
          An architecture and interior design firm <br />
          that caters to both residential and commercial clients.
        </p>
      </section>

      <div class="slider-wrap">
        <div class="navigation">
          <div class="prev">
            <img src={sliderPrev} alt="" />
          </div>
          <div class="next">
            <img src={sliderNext} alt="" />
          </div>
        </div>

        <div class="slider">
          <img src={slider1} alt="" />
          <img src={slider2} alt="" />
          <img src={slider3} alt="" />
          <img src={slider4} alt="" />
          <img src={slider5} alt="" />
          <img src={slider6} alt="" />
          <img src={slider7} alt="" />
        </div>
      </div>
    </div>
  );
};
