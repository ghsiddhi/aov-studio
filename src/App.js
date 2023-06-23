import React from "react";
import { Header } from "./header/Header";
import { Hero } from "./hero/Hero";
import { About } from "./about/About";
import { Services } from "./services/Services";
import { Portfolio } from "./portfolio/Portfolio";
import { Blog } from "./blog/Blog";
import { Footer } from "./footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Blog />
      <Footer />
    </>
  );
};

export default App;
