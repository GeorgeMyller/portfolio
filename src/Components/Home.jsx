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
    <section
      id="home"
      style={{
        position: "relative",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <img
        src={image}
        alt={imageAltText}
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#333300",
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          padding: "clamp(1rem, 5vw, 2.5rem)",
          borderRadius: "12px",
          width: "clamp(280px, 80%, 800px)",
          maxWidth: "90vw",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2rem, 8vw, 6.5rem)",
            marginBottom: "clamp(0.5rem, 2vw, 1rem)",
            textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
            wordWrap: "break-word",
          }}
        >
          {name}
        </h1>
        <h2
          style={{
            fontSize: "clamp(1rem, 4vw, 1.8rem)",
            fontWeight: "400",
            textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
          }}
        >
          {title}
        </h2>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "clamp(1rem, 5vh, 3rem)",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <img
          src={arrowSvg}
          alt={imageAltText}
          style={{
            height: "clamp(2rem, 5vw, 3rem)",
            width: "clamp(2rem, 5vw, 3rem)",
          }}
        />
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
