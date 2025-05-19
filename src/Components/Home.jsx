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


const Home = ({ name, title, image, imageAlt, subtitle, ctaText, ctaHref }) => {
  return (
    <header
      id="home"
      className="min-height"
      aria-label="Seção inicial do portfólio"
      style={{
        position: "relative",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <img
        className="background"
        src={image || defaultImage}
        alt={imageAlt || defaultImageAlt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />
      {/* Overlay escuro */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(90deg, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.15) 100%)",
          zIndex: 1,
        }}
        aria-hidden="true"
      />
      {/* Conteúdo centralizado */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          color: "#fff",
          maxWidth: "600px",
          width: "90vw",
          padding: "2.5rem 2rem 2rem 2.5rem",
          borderRadius: "18px",
          background: "rgba(0,0,0,0.18)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          animation: "fadeIn 1.2s cubic-bezier(.4,0,.2,1)",
        }}
      >
        <h1
          tabIndex="0"
          style={{
            fontSize: "2.8rem",
            fontWeight: 800,
            lineHeight: 1.1,
            margin: 0,
            letterSpacing: "-1px",
            textShadow: "0 2px 12px rgba(0,0,0,0.25)",
          }}
        >
          {name}
        </h1>
        <h2
          tabIndex="0"
          style={{
            fontSize: "1.6rem",
            fontWeight: 500,
            margin: "0.5rem 0 0.5rem 0",
            textShadow: "0 1px 8px rgba(0,0,0,0.18)",
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            style={{
              fontSize: "1.15rem",
              margin: "0 0 1.5rem 0",
              color: "#e0e0e0",
              fontWeight: 400,
              textShadow: "0 1px 8px rgba(0,0,0,0.18)",
            }}
          >
            {subtitle}
          </p>
        )}
        {ctaText && ctaHref && (
          <a
            href={ctaHref}
            style={{
              display: "inline-block",
              background: "#6c63ff",
              color: "#fff",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.1rem",
              padding: "0.7rem 2.2rem",
              marginTop: "0.5rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              transition: "background 0.2s",
            }}
            aria-label={ctaText}
          >
            {ctaText}
          </a>
        )}
      </div>
      {/* Seta animada */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 3,
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
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @media (max-width: 600px) {
            header#home > div[style*='z-index: 2'] {
              padding: 1.2rem 0.7rem 1.2rem 1rem !important;
              max-width: 98vw !important;
            }
            header#home h1 {
              font-size: 2rem !important;
            }
            header#home h2 {
              font-size: 1.1rem !important;
            }
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
  ctaText: "Ver Portfólio",
  ctaHref: "#portfolio",
};


Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  subtitle: PropTypes.string,
  ctaText: PropTypes.string,
  ctaHref: PropTypes.string,
};

export default Home;
