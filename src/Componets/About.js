import React from "react";
import web from "../Componets/images/img3.jpg";
import Common from "../Componets/Common ";
const About = () => {
  return (
    <>
      <Common
        name="Welcome to about page"
        imgsrc={web}
        visit="/contact"
        btnname="Contact Now"
      />
    </>
  );
};
export default About;
