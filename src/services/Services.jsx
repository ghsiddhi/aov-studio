import React from "react";
import rightArrow from "../images/icons/right-arrow.png";
import architecture from "../images/icons/architecture.png";
import architectureServiceLarge from "../images/architecture-service/architecture-service-large.webp";
import architectureServiceMedium from "../images/architecture-service/architecture-service-medium.webp";
import architectureServiceSmall from "../images/architecture-service/architecture-service-small.webp";
import interior from "../images/icons/interior.png";
import interiorDesignServiceLarge from "../images/interior-design-service/interior-design-service-large.webp";
import interiorDesignServiceMedium from "../images/interior-design-service/interior-design-service-medium.webp";
import interiorDesignServiceSmall from "../images/interior-design-service/interior-design-service-small.webp";
import renovation from "../images/icons/renovation.png";
import renovationLarge from "../images/renovation-service/renovation-large.webp";
import renovationMedium from "../images/renovation-service/renovation-medium.webp";
import renovationSmall from "../images/renovation-service/renovation-small.webp";
import "./servicesStyles.css";

export const Services = () => {
  return (
    <section class="services contained" id="services">
      <h2>Services</h2>
      <div class="service-item">
        <div class="service-item-content">
          <section>
            <h3>Architecture</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
              perspiciatis pariatur atque debitis officia autem sit
              consequuntur, voluptatibus quas qui veniam provident quia quae non
              eum animi itaque numquam repudiandae.
            </p>

            <a class="more-link">
              <span>Learn More</span>
              <img src={rightArrow} alt="" />
            </a>
          </section>

          <img src={architecture} alt="" />
        </div>

        <picture>
          <source
            srcset={architectureServiceLarge}
            media="(min-width: 850px)"
          />
          <source
            srcset={architectureServiceMedium}
            media="(min-width: 500px)"
          />
          <img src={architectureServiceSmall} alt="" />
        </picture>
      </div>

      <div class="service-item">
        <div class="service-item-content">
          <section>
            <h3>Interior Design</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
              perspiciatis pariatur atque debitis officia autem sit
              consequuntur, voluptatibus quas qui veniam provident quia quae non
              eum animi itaque numquam repudiandae.
            </p>

            <a class="more-link">
              <span>Learn More</span>
              <img src={rightArrow} alt="" />
            </a>
          </section>

          <img src={interior} alt="" />
        </div>

        <picture>
          <source
            srcset={interiorDesignServiceLarge}
            media="(min-width: 850px)"
          />
          <source
            srcset={interiorDesignServiceMedium}
            media="(min-width: 500px)"
          />
          <img src={interiorDesignServiceSmall} alt="" />
        </picture>
      </div>

      <div class="service-item">
        <div class="service-item-content">
          <section>
            <h3>Renovation</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
              perspiciatis pariatur atque debitis officia autem sit
              consequuntur, voluptatibus quas qui veniam provident quia quae non
              eum animi itaque numquam repudiandae.
            </p>

            <a class="more-link">
              <span>Learn More</span>
              <img src={rightArrow} alt="" />
            </a>
          </section>

          <img src={renovation} alt="" />
        </div>

        <picture>
          <source srcset={renovationLarge} media="(min-width: 850px)" />
          <source srcset={renovationMedium} media="(min-width: 500px)" />
          <img src={renovationSmall} alt="" />
        </picture>
      </div>
    </section>
  );
};
