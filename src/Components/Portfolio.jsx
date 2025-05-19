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
    image: require("../images/Default_Enter_a_creative_world_where_the_pet_industry_meets_co_0-2.jpg"),
    tech: ["Python", "CrewAI", "Evolution API"],
    demo: "",
  },
  {
    title: "move_to_ssd",
    description: "Script Python para migrar pastas e aplicativos do macOS para SSD externo com symlinks automáticos.",
    url: "https://github.com/GeorgeMyller/move_to_ssd",
    image: require("../images/Default_Imagine_a_world_where_the_office_is_not_just_a_place_f_0.jpg"),
    tech: ["Python", "macOS", "Symlinks"],
    demo: "",
  },
  {
    title: "agenteinstagram",
    description: "Agente automatizado para postagens no Instagram com criação de legendas automaticas e postagem do conteúdo.",
    url: "https://github.com/GeorgeMyller/agenteinstagram",
    image: require("../images/Default_Enter_a_creative_world_where_the_pet_industry_meets_co_1.jpg"),
    tech: ["Python", "Instagram API", "Automação"],
    demo: "",
  },
  {
    title: "webscraping",
    description: "Scripts em Python para extração e análise de dados de páginas web usando bibliotecas de scraping.",
    url: "https://github.com/GeorgeMyller/webscraping",
    image: require("../images/Default_Enter_a_creative_world_where_the_pet_industry_meets_co_2.jpg"),
    tech: ["Python", "BeautifulSoup", "Pandas"],
    demo: "",
  },
  {
    title: "linkedinwriter",
    description: "Ferramenta para automação de criação de conteúdo e postagens no LinkedIn.",
    url: "https://github.com/GeorgeMyller/linkedinwriter",
    image: require("../images/Default_Enter_a_creative_world_where_the_pet_industry_meets_co_3.jpg"),
    tech: ["Python", "LinkedIn API", "Automação"],
    demo: "",
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
        <div className="container portfolio-grid">
          {projectList.map((project) => (
            <div className="box project-card" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Ver código de ${project.title}`}>
                <img src={project.image} alt={`Imagem do projeto ${project.title}`} className="project-image" loading="lazy" />
                <h3>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
              <div className="tech-list">
                {project.tech.map((t) => (
                  <span className="tech-badge" key={t}>{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-btn">Ver código</a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-btn">Demo</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
