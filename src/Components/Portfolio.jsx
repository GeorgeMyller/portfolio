/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Default_Your_pet_reptile_has_always_been_your_source_of_inspir_0.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "groups_evo_crewai-escolher-envio-para-grupo-ou-para-meu-numero",
    description: "Bot para resumir mensagens de grupos do WhatsApp e permitir o envio para o grupo ou número pessoal usando CrewAI.",
    url: "https://github.com/GeorgeMyller/groups_evo_crewai-escolher-envio-para-grupo-ou-para-meu-numero",
  },
  {
    title: "move_to_ssd",
    description: "Script Python para migrar pastas e aplicativos do macOS para SSD externo com symlinks automáticos.",
    url: "https://github.com/GeorgeMyller/move_to_ssd",
  },
  {
    title: "agenteinstagram",
    description: "Agente automatizado para postagens no Instagram com criação de legendas automaticas e postagem do conteúdo.",
    url: "https://github.com/GeorgeMyller/agenteinstagram",
  },
  {
    title: "webscraping",
    description: "Scripts em Python para extração e análise de dados de páginas web usando bibliotecas de scraping.",
    url: "https://github.com/GeorgeMyller/webscraping",
  },
  {
    title: "linkedinwriter",
    description: "Ferramenta para automação de criação de conteúdo e postagens no LinkedIn.",
    url: "https://github.com/GeorgeMyller/linkedinwriter",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
