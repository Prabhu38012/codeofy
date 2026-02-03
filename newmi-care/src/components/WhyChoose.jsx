import React from 'react';
import './WhyChoose.css';

const advantages = [
    'Teenage to Menopause Care',
    'Offline and Digital Consultations',
    'Clinic + App Care',
    'Guided Wellness Programs',
    'Women WhatsApp Community',
    'Dedicated Care Team'
];

const WhyChoose = () => {
    return (
        <section className="why-choose-section">
            <h2>Why choose newmi care?</h2>

            <div className="comparison-table">
                <div className="table-header">
                    <div className="col-advantage">Advantages</div>
                    <div className="col-newmi">Newmi Care<br />Clinics</div>
                    <div className="col-others">Other Clinics</div>
                </div>

                {advantages.map((advantage, index) => (
                    <div className="table-row" key={index}>
                        <div className="col-advantage">{advantage}</div>
                        <div className="col-newmi">
                            <span className="check">✓</span>
                        </div>
                        <div className="col-others">
                            <span className="cross">✗</span>
                        </div>
                    </div>
                ))}
            </div>

            <button className="cta-btn">Book An Appointment</button>
        </section>
    );
};

export default WhyChoose;
