import React, { useState } from 'react';
import './Treatments.css';

const treatments = [
    {
        id: 1,
        title: 'Menstrual Disorders & Period Pain',
        description: 'Diagnosis And Treatment For Irregular Cycles, Heavy Bleeding, And Painful Periods With A Focus On Hormonal Balance.'
    },
    {
        id: 2,
        title: 'PCOS & Hormonal Imbalance',
        description: 'Comprehensive PCOS Management Covering Hormones, Weight, Insulin Resistance, And Long-Term Reproductive Health.'
    },
    {
        id: 3,
        title: 'Fertility & Pregnancy Care',
        description: 'Complete fertility support from preconception planning to successful pregnancy monitoring and care.'
    },
    {
        id: 4,
        title: 'Menopause Management',
        description: 'Expert guidance for managing menopause symptoms with personalized treatment plans and hormone therapy options.'
    }
];

const Treatments = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 2;

    const totalPages = Math.ceil(treatments.length / itemsPerPage);
    const currentTreatments = treatments.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    const handlePrev = () => {
        setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    };

    return (
        <section className="treatments-section">
            <h2>Gynecology Treatments & Services</h2>

            <div className="treatments-grid">
                {currentTreatments.map((treatment) => (
                    <div className="treatment-card" key={treatment.id}>
                        <h3>{treatment.title}</h3>
                        <p>{treatment.description}</p>
                    </div>
                ))}
            </div>

            <button className="book-btn">Book An Appointment</button>

            <div className="carousel-nav">
                <button onClick={handlePrev} className="nav-btn">&lt;</button>
                <button onClick={handleNext} className="nav-btn">&gt;</button>
            </div>
        </section>
    );
};

export default Treatments;
