import React from "react";
import "./footerStyles.css";

export const Footer = () => {
  return (
    <footer id="footer">
      <div class="contained">
        <section class="footer-services">
          <h2>Services</h2>
          <ul>
            <li>Architecture</li>
            <li>Interior design</li>
            <li>Renovation</li>
          </ul>
        </section>

        <section class="footer-address">
          <h2>Address</h2>
          <address>
            lorem ipsum,
            <br />
            dolor sit,
            <br />
            amet consectetur
          </address>
        </section>

        <section class="footer-contact">
          <h2>Contact</h2>
          <span>+9145343234349</span>
          <span>lorem@gmail.com</span>
        </section>
      </div>
    </footer>
  );
};
