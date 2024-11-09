// src/components/HomePage.tsx
import React from 'react';
import './HomePage.css';
import illustration from '../assets/illustration.png'; // Add your image to the assets folder

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* Header */}
      <header className="header">
        <div className="logo">iCampusAI</div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Product</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Left Content */}
        <section className="main-text">
          <h1>Smarter Universities, Seamless Workflows</h1>
          <p>Our AI agents are revolutionizing university operations, securely automating routine tasks and creating effortlessly streamlined workflows—all without data sharing.</p>
          <p>From simplifying administration to optimizing data management, these intelligent agents boost productivity, precision, and speed, delivering a seamless experience that empowers both students and staff.</p>
          
          <p className="highlight">Smarter universities, empowered staff, and a brighter future for students—AI that’s efficient, private, and purpose-built.</p>

          <button className="get-started-button">Get Started</button>

          <div className="features">
            <div className="feature">
              <span className="feature-icon">🔒</span>
              <span>Private & Secure</span>
            </div>
            <div className="feature">
              <span className="feature-icon">⚡</span>
              <span>Speed & Flexibility</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🤝</span>
              <span>Better Collaboration</span>
            </div>
          </div>
        </section>

        {/* Right Image */}
        <section className="right-image">
          <img src={illustration} alt="Illustration" />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
