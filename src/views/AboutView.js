import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import About from "../components/sections/About";

const AboutView = () => {
  return (
    <>
      <About
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      {/* <Testimonial topDivider />
      <Cta split /> */}
    </>
  );
};

export default AboutView;
