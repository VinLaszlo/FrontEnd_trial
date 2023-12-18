import React from "react";
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import FeaturedProgram from "../components/Route/FeaturedProgram/FeaturedProgram";
import Footer from "../components/Layout/Footer";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <FeaturedProgram />
      <Footer />
    </div>
  );
};

export default HomePage;
