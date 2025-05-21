/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";
import { useLanguage } from "../i18n";

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

const imageAltText = "purple and blue abstract background";

const skillsList = [
  { name: "aboutSkillIA", icon: "🤖" },
  { name: "aboutSkillData", icon: "📊" },
  { name: "aboutSkillPython", icon: "🐍" },
  { name: "aboutSkillML", icon: "🧠" },
  { name: "aboutSkillNLP", icon: "💬" },
  { name: "aboutSkillWeb", icon: "🌐" },
];

const About = () => {
  const { t } = useLanguage();
  return (
    <section
      className="padding"
      id="about"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: "var(--card-bg, white)",
          width: "min(95vw, 600px)",
          padding: "4rem 2rem",
          margin: "3rem auto",
          textAlign: "center",
          color: "var(--text-color, #222)",
          borderRadius: "16px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        }}
        aria-label="Sobre mim"
      >
        <h2 tabIndex="0">{t("aboutTitle")}</h2>
        <p className="large">{t("aboutDescription")}</p>
        {/* <a
          href="/curriculo.pdf"
          download
          style={{
            display: "inline-block",
            margin: "1rem 0",
            padding: "0.5rem 1.5rem",
            background: "#6c63ff",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1rem",
            boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            transition: "background 0.2s",
          }}
          aria-label="Baixar currículo em PDF"
        >
          Baixar Currículo
        </a> */}
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.15rem",
            margin: "2rem 3rem",
            gap: "3rem",
            listStyle: "none",
            padding: 0,
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill.name} tabIndex="0" style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
              <span style={{ fontSize: "1.3rem", marginRight: "0.5rem" }} aria-hidden="true">{skill.icon}</span>
              <span>{t(skill.name)}</span>
            </li>
          ))}
        </ul>
        <hr />
        <blockquote style={{ padding: "1rem 3rem 0", fontStyle: "italic", color: "#555" }}>{t("aboutQuote")}</blockquote>
      </div>
    </section>
  );
};

export default About;
