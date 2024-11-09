/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Default_Enter_a_creative_world_where_the_pet_industry_meets_co_0.jpg";

const imageAltText = "";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height" style={{ position: "relative", textAlign: "center" }}>
      <img className="background" src={image} alt="" style={{ width: "100%", height: "auto" }} />
      <div style={{ 
        position: "absolute", 
        top: "40%", // Moved up slightly from center
        left: "50%", 
        transform: "translate(-50%, -50%)", 
        color: "#333300",
        backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
        padding: "2rem",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        width: "80%",
        maxWidth: "600px"
      }}>
        <h1 style={{ 
          fontSize: "6.5rem",
          marginBottom: "1rem",
          textShadow: "2px 2px 4px rgba(0,0,0,0.2)"
        }}>{name}</h1>
        <h2 style={{
          fontSize: "1.8rem",
          fontWeight: "400",
          textShadow: "1px 1px 2px rgba(0,0,0,0.2)"
        }}>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%", transform: "translateX(-50%)" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
