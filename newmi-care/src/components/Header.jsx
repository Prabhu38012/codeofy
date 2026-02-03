import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <section className="header-section">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-text">
            <span className="logo-newmi">newm<span className="logo-i">i</span></span>
          </span>
          <span className="logo-care">care</span>
        </div>
        <button className="call-btn">CALL NOW</button>
      </nav>

      {/* Hero Section */}
      <div className="hero-wrapper">
        <div className="hero">
          <div className="hero-left-strip"></div>
          <div className="hero-main">
            <div className="hero-content">
              <h1>Trusted Gynecologists<br />In Gurugram</h1>
              <div className="hero-divider"></div>
              <p className="clinic-info">
                Newmi Care Women & Child Clinic, Sector 69,<br />
                Gurugram  | Mon-Sat | 9:00 AM – 9:00 PM
              </p>
            </div>
            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=900&h=500&fit=crop"
                alt="Doctor consulting with patients"
              />
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="stats-bar">
          <div className="stat-item">
            <span className="stat-number">1 Lakh+</span>
            <span className="stat-label">Happy Patients</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Experienced Doctors</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">4.8/5</span>
            <span className="stat-label">Positive Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
