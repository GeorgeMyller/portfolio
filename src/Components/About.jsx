/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/Default_crie_um_imagem_landscape_sobre_Bilogia_em_transio_par_0.jpg";

const imageAltText = "background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am passionate about solving problems in new creative ways to drive innovation..";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "AI Agents",
  "Data Science",
  "Data Analysis",
  "Machine Learning",
  "Deep Learning",
  "Python",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "With a background in Python, data analysis, and AI agents. I am always looking for new opportunities to learn and grow.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "#fff",
          opacity: [0.8],
          width: "60%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "center",
            columns: 2,
            fontSize: "1.25rem",
            margin: "0rem 0.2rem",
            gap: "2rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
