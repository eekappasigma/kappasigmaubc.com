import React from "react";
// import sections
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
