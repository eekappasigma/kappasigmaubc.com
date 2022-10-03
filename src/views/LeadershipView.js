import React from "react";
import Leadership from "../components/sections/Leadership";

const LeadershipView = () => {
  return (
    <>
      <Leadership
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

export default LeadershipView;
