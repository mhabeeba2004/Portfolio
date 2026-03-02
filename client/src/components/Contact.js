import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Let's work together on modern digital experiences.</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="contact-content">
          <div className="contact-card">
            <div className="card-glow"></div>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <a href="mailto:mhabeeba2004@gmail.com" className="contact-link">
                    mhabeeba2004@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">🌐</div>
                <div className="contact-details">
                  <h3>Dribbble</h3>
                  <a 
                    href="https://dribbble.com/mhabeeba2004" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link social-link dribbble-link"
                  >
                    dribbble.com/mhabeeba2004
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">🎨</div>
                <div className="contact-details">
                  <h3>Behance</h3>
                  <a 
                    href="https://www.behance.net/ummehabhabeeba" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="contact-link social-link behance-link"
                  >
                    behance.net/ummehabhabeeba
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h3>Location</h3>
                  <span className="contact-text">India</span>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <h3>Send Message</h3>
              <form className="form">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  <span>Send Message</span>
                  <div className="btn-glow"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
