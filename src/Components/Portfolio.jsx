/**
 * Portfolio component
 *
 * Highlights some of your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react"; // Import React library

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Default_Your_pet_reptile_has_always_been_your_source_of_inspir_0.jpg"; // Import image

const imageAltText = "desk"; // Alt text for the image

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "LinkedIn Content Writer with CrewAI & Gemini", // Project title
    description:
      "A specialized AI system that combines CrewAI framework with Google's Gemini model to generate professional LinkedIn content. The project demonstrates AI agents collaboration to create engaging social media posts, leveraging advanced language models for content creation.", // Project description
    url: "https://github.com/GeorgeMyller/linkedinwriter", // Project URL
  },
  {
    title: "Data Analytics Portfolio", // Project title
    description:
      "A comprehensive collection of data analytics projects showcasing skills in Python, data visualization, and statistical analysis. Features include exploratory data analysis (EDA), machine learning implementations, and interactive data visualizations using libraries like Pandas, NumPy, and Matplotlib.", // Project description
    url: "https://github.com/GeorgeMyller/DataAnalytics", // Project URL
  },
  {
    title: "Python Deep Learning Studies", // Project title
    description:
      "A comprehensive repository documenting advanced Python learning journey, focusing on Deep Learning implementation. Includes practical exercises and projects covering neural networks, data preprocessing, model training, and AI fundamentals following Sandeco's course methodology.", // Project description
    url: "https://github.com/GeorgeMyller/cursos_Sandeco", // Project URL
  },
];

/**
 * Portfolio component with centered layout
 */
const Portfolio = () => {
  return (
    <section
      id="portfolio" // Section ID
      style={{
        padding: "clamp(0rem, 0vw, 0rem)", // Responsive padding
        maxWidth: "1900px", // Maximum width of the section
        margin: "0 auto", // Center the section horizontally
        textAlign: "center", // Center the content
      }}
    >
      <h2
        style={{
          textAlign: "center", // Center the heading text
          fontSize: "clamp(1.8rem, 4vw, 2.5rem)", // Responsive font size
          marginBottom: "clamp(2rem, 5vw, 4rem)", // Responsive bottom margin
        }}
      >
        Portfolio
      </h2>
      <div
        style={{
          display: "grid", // Use CSS grid for layout
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", // Responsive grid columns
          gap: "clamp(1rem, 3vw, 2rem)", // Responsive gap between grid items
          padding: "0 clamp(1rem, 3vw, 2rem)", // Responsive padding
          justifyContent: "center", // Center the grid items
        }}
      >
        {projectList.map((project) => (
          <div
            key={project.title} // Unique key for each project
            style={{
              backgroundColor: "#ffffff", // Background color
              borderRadius: "12px", // Rounded corners
              padding: "clamp(1rem, 3vw, 2rem)", // Responsive padding
              boxShadow: "0 4px 6px rgba(0,0,0,0.8)", // Box shadow for card
              display: "flex", // Use flexbox for layout
              flexDirection: "column", // Column layout
              alignItems: "left", // Center the content inside the card
            }}
          >
            <h3
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 1.6rem)", // Responsive font size
                marginBottom: "1rem", // Bottom margin
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                fontSize: "clamp(1rem, 1.8vw, 1.1rem)", // Responsive font size
                lineHeight: 1.6, // Line height
                flex: 1, // Flex grow
                marginBottom: "1.5rem", // Bottom margin
              }}
            >
              {project.description}
            </p>
            <a
              href={project.url} // Project URL
              target="_blank" // Open link in new tab
              rel="noopener noreferrer" // Security measure
              style={{
                display: "inline-block", // Inline block display
                padding: "0.8rem 1.2rem", // Padding
                backgroundColor: "#007bff", // Background color
                color: "white", // Text color
                textDecoration: "none", // Remove underline
                borderRadius: "6px", // Rounded corners
                textAlign: "center", // Center the text
                fontSize: "clamp(0.9rem, 1.5vw, 1rem)", // Responsive font size
              }}
            >
              View Project
            </a>
          </div>
        ))}
      </div>
      <div
        style={{
          maxWidth: "clamp(300px, 90%, 1200px)", // Responsive max width
          margin: "3rem auto 0", // Center the div and add top margin
        }}
      >
        <img
          src={image} // Image source
          alt={imageAltText} // Alt text for the image
          style={{
            width: "90%", // Image width
            height: "auto", // Maintain aspect ratio
            borderRadius: "12px", // Rounded corners
            objectFit: "cover", // Cover the container
          }}
        />
      </div>
    </section>
  );
};

export default Portfolio; // Export the Portfolio component
