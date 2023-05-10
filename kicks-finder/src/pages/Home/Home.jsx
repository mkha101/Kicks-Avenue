import React from "react";
import "./Home.css";
import { Slider } from "../../components/Slider/Slider";
import { FeaturedProducts } from "../../components/FeaturedProducts/FeaturedProducts";
import { Contact } from "../../components/Contact/Contact";
import Categories from "../../components/Categories/Categories";
export const Home = () => {
  return (
    <div className="home">
      <Slider />
      <Categories />
      <FeaturedProducts type="featured" />
      <FeaturedProducts type="trending" />
      <Contact />
    </div>
  );
};
