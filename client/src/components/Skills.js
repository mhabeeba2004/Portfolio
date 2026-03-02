import React from 'react';
import './Skills.css';

const Skills = () => {
  const designSkills = [
    { name: "UI Design", level: 90 },
    { name: "UX Research", level: 85 },
    { name: "Wireframing", level: 88 },
    { name: "Prototyping", level: 82 },
    { name: "Interaction Design", level: 86 }
  ];

  const technicalSkills = [
    { name: "Figma", level: 95 },
    { name: "Design Systems", level: 78 },
    { name: "Mobile App Design", level: 80 },
    { name: "Web UI Design", level: 92 }
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Skills</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="skills-content">
          <div className="skills-cards-container">
            <div className="skills-card">
              <div className="skills-card-header">
                <h3 className="skills-card-title">Design Skills</h3>
              </div>
              <div className="skills-list">
                {designSkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-progress">
                      <div className="progress-bar">
                        <div className="progress-fill" style={{width: `${skill.level}%`}}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="skills-card">
              <div className="skills-card-header">
                <h3 className="skills-card-title">Technical Skills</h3>
              </div>
              <div className="skills-list">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-progress">
                      <div className="progress-bar">
                        <div className="progress-fill" style={{width: `${skill.level}%`}}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
