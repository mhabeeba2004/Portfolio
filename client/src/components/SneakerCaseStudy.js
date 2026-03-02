import React from 'react';
import './SneakerCaseStudy.css';

const SneakerCaseStudy = () => {
  return (
    <div className="sneaker-case-study-page">
      <div className="case-study-header">
        <button className="back-button" onClick={() => window.history.back()}>
          ← Back to Projects
        </button>
        <h1 className="page-title">Premium Sneaker Shopping App</h1>
        <p className="page-subtitle">Complete UI/UX Design Case Study</p>
      </div>

      <div className="case-study-content">
        <section className="content-section">
          <h2>Project Overview</h2>
          <p>
            A premium e-commerce mobile application designed for sneaker enthusiasts, featuring an intuitive shopping experience with modern UI patterns and seamless user journey from discovery to purchase.
          </p>
        </section>

        <section className="content-section">
          <h2>Design Process</h2>
          <p>
            The design process focused on creating a premium shopping experience that balances aesthetics with functionality. Key considerations included user research, wireframing, visual design, and prototyping.
          </p>
        </section>

        <section className="images-section">
          <div className="image-block">
            <h3>Home Screen & Discovery</h3>
            <div className="image-wrapper">
              <img src="/CS sneakr prt 1.png" alt="Premium Sneaker App - Home Screen" />
            </div>
            <p>
              Clean home screen featuring featured collections, trending sneakers, and personalized recommendations with smooth animations and micro-interactions.
            </p>
          </div>

          <div className="image-block">
            <h3>Product Detail & Shopping Experience</h3>
            <div className="image-wrapper">
              <img src="/CS sneakr prt 2.png" alt="Premium Sneaker App - Product Detail" />
            </div>
            <p>
              Detailed product pages with 360° views, size recommendations, customer reviews, and seamless add-to-cart functionality designed for conversion.
            </p>
          </div>

          <div className="image-block">
            <h3>Checkout & User Profile</h3>
            <div className="image-wrapper">
              <img src="/CS sneakr prt 3.png" alt="Premium Sneaker App - Checkout" />
            </div>
            <p>
              Streamlined checkout process with multiple payment options and user profile management for tracking orders and managing preferences.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>Key Features</h2>
          <ul>
            <li>Advanced search and filtering options</li>
            <li>Personalized recommendations based on browsing history</li>
            <li>Real-time inventory tracking</li>
            <li>Secure multi-payment gateway integration</li>
            <li>Push notifications for new arrivals and sales</li>
            <li>Social sharing capabilities</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Technical Implementation</h2>
          <p>
            Built with modern mobile-first design principles, utilizing React Native for cross-platform compatibility, with a focus on performance optimization and accessibility standards.
          </p>
        </section>
      </div>
    </div>
  );
};

export default SneakerCaseStudy;
