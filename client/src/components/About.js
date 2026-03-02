import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="about-content">
          <div className="about-left">
            <div className="about-image">
              <img src="/profile.png" alt="Umme Habiba" />
              <div className="image-frame"></div>
            </div>
          </div>
          
          <div className="about-right">
            <div className="about-card">
              <div className="info-header">
                  <h4 className="info-title">About Me</h4>
                </div>
                <div className="info-content">
                  <p className="about-paragraph">
                    I'm Umme Habiba, a UI/UX Designer specializing in Mobile & Web Interface Design. I create intuitive interfaces, conduct user research, and transform complex problems into elegant solutions. My passion is designing user experiences that blend aesthetics with functionality, making every interaction feel natural and engaging.
                  </p>
                </div>
            </div>
            
            <div className="additional-info">
              <div className="info-box internship-box">
                <div className="info-header">
                  <h4 className="info-title">Recent Internship</h4>
                </div>
                <div className="info-content">
                  <h5 className="degree-name">UI/UX Designer Intern</h5>
                  <p className="institution">MH Talent Craft Solutions • Remote • 3 Months</p>
                </div>
              </div>
              <div className="info-box education-box">
                <div className="info-header">
                  <h4 className="info-title">Education</h4>
                </div>
                <div className="info-content">
                  <h5 className="degree-name">Master of Business Administration (MBA)</h5>
                  <p className="institution">Jawaharlal Nehru Technological university, Anantapur</p>
                </div>
              </div>
              <div className="info-box location-box">
                <div className="info-header">
                  <h4 className="info-title">Location</h4>
                </div>
                <div className="info-content">
                  <h5 className="degree-name">Adoni, Andhra Pradesh</h5>
                  <p className="institution">India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
