import React from 'react';
import './AboutClinic.css';

const AboutClinic = () => {
    return (
        <section className="about-section">
            <h2>About Newmi Care Clinic</h2>

            <div className="clinic-image-wrapper">
                <img
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=700&h=400&fit=crop"
                    alt="Newmi Care Clinic Interior"
                />
                <div className="location-overlay">
                    <span className="location-icon">📍</span>
                    <span>First Floor, Spaze Corporate Park, Shop No. 150 & 158, Opp. Tulip Chowk, Sector 69, Gurugram, Haryana 122101</span>
                </div>
            </div>

            <div className="about-description">
                <p>
                    At <strong>Newmi Care</strong>, Women's Health Is Never Rushed Or Reduced To Symptoms.
                    Our Gurugram Clinic Is Built Around A Preventive, Whole-Body Approach That Combines{' '}
                    <strong>Medical Expertise With Compassionate Care.</strong> We Focus On Understanding
                    Your History, Lifestyle, And Goals, So Every Decision Feels Informed And Supported.
                </p>
            </div>
        </section>
    );
};

export default AboutClinic;
