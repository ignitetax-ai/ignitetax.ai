"use client";

import AboutUsNew from "./about/AboutUs-new";
import HomeNew from "./components/Home-new";
import ProductNew from "./product/Product-new";
import ResourcesNew from "./resources/Resources-new";

export default function Hero() {
  return (
    <>
      <div id="home">
        <HomeNew />
      </div>
      <div id="about_us">
        <AboutUsNew />
      </div>
      <div id="product">
        <ProductNew />
      </div>
      <div id="resources">
        <ResourcesNew />
      </div>
    </>
  );
}
