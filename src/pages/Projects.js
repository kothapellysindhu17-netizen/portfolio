import React from "react";

function Projects() {
  const projects = [
    {
      name: "Memory Game",
      desc: "A kids memory game using React",
      link: "https://github.com/kothapellysindhu17-netizen/memory-game"
    },
    {
      name: "E-Commerce Website",
      desc: "React based shopping website",
      link: "https://github.com/kothapellysindhu17-netizen/ecommerce"
    }
  ];

  return (
    <div className="container">
      <h1>My Projects</h1>

      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.name}</h3>
          <p>{project.desc}</p>
          <a href={project.link} target="_blank" rel="noreferrer">
            View on GitHub
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;