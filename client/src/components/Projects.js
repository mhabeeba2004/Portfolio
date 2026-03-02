import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Premium Sneaker Shopping App",
      description: "Modern e-commerce mobile application with premium sneaker shopping experience.",
      tags: ["Mobile UI", "E-commerce", "Fashion", "Premium"],
      thumbnail: "/covr page.png",
      caseStudyUrl: "/sneaker-case-study"
    },
    {
      title: "VERA – Minimal Fashion Shopping App",
      description: "Clean and minimalist fashion shopping experience with elegant user interface.",
      tags: ["Mobile App", "Fashion", "Minimal Design"],
      thumbnail: "/cover page of plant.png",
      caseStudyUrl: "#full-case-study-vera"
    },
    {
      title: "Sofar Service Website UI",
      description: "Professional service platform with streamlined user journey and modern aesthetics.",
      tags: ["Web UI", "Service Design", "B2B"],
      thumbnail: "/Behance Full Case Study Vera.png",
      caseStudyUrl: "#full-case-study-sofar"
    },
    {
      title: "Dashboard UI Concept",
      description: "Data-driven dashboard with complex information architecture and visual hierarchy.",
      tags: ["Dashboard", "Data Viz", "Analytics"],
      thumbnail: "/CS sneakr prt 1.png",
      caseStudyUrl: "#full-case-study-dashboard"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="projects-content">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card" onClick={() => {
                if (project.caseStudyUrl) {
                  window.location.href = project.caseStudyUrl;
                }
              }}>
                <div className="card-glow"></div>
                <div className="project-thumbnail">
                  <img src={project.thumbnail} alt={project.title} />
                </div>
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <div className="project-description">
                  <p>{project.description}</p>
                </div>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
