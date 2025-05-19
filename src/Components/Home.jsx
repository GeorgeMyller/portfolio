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

// Permite passar imagem e alt como props, mas mantém padrão
const defaultImage = require("../images/Default_Enter_a_creative_world_where_the_pet_industry_meets_co_0.jpg");
const defaultImageAlt = "Lizard with a window background, on front a computer";


const Home = ({ name, title, image, imageAlt, subtitle }) => {
  return (
    <header id="home" className="min-height" aria-label="Seção inicial do portfólio">
      <img className="background" src={image || defaultImage} alt={imageAlt || defaultImageAlt} />
      <div
        style={{
          position: "absolute",
          top: "5rem",
          left: "2rem",
          width: "min(90vw, 22rem)",
          color: "white",
          textShadow: "0 2px 8px rgba(0,0,0,0.4)",
          background: "rgba(0,0,0,0.15)",
          borderRadius: "12px",
          padding: "1.5rem 1rem 1rem 1.5rem",
        }}
      >
        <h1 tabIndex="0">{name}</h1>
        <h2 tabIndex="0">{title}</h2>
        {subtitle && <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>{subtitle}</p>}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        aria-label="Role para ver mais"
      >
        <img
          src={arrowSvg}
          style={{ height: "3rem", width: "3rem", animation: "bounce 1.5s infinite" }}
          alt="Seta para baixo, role para ver mais"
        />
        <style>{`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(12px); }
          }
        `}</style>
      </div>
    </header>
  );
};


Home.defaultProps = {
  name: "",
  title: "",
  image: defaultImage,
  imageAlt: defaultImageAlt,
  subtitle: "Desenvolvedor de IA e soluções digitais inovadoras.",
};


Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Home;
