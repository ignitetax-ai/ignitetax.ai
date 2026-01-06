"use client";

import Home from "./components/home";
import AboutUs from "./about/about-us";
import Product from "./product/product";
import Resources from "./resources/resources";

export default function Page() {
  return (
    <>
      <div id="home">
        <Home />
      </div>
      <div id="about_us">
        <AboutUs />
      </div>
      <div id="product">
        <Product />
      </div>
      <div id="resources">
        <Resources />
      </div>
    </>
  );
}
