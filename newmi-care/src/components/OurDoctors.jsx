import React, { useState } from 'react';
import './OurDoctors.css';

const doctors = [
    {
        id: 1,
        name: 'Dr. Sana Ansari',
        qualifications: 'MBBS, MS',
        specializations: 'Obstetrics & Gynaecology, Hormonal Health, Fertility',
        experience: '9+ years of experience',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop'
    },
    {
        id: 2,
        name: 'Dr. Priya Sharma',
        qualifications: 'MBBS, MD',
        specializations: 'Women\'s Health, Prenatal Care, Menopause',
        experience: '12+ years of experience',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop'
    },
    {
        id: 3,
        name: 'Dr. Meera Gupta',
        qualifications: 'MBBS, DNB',
        specializations: 'Pediatric Care, Child Development, Vaccination',
        experience: '8+ years of experience',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop'
    }
];

const OurDoctors = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? doctors.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === doctors.length - 1 ? 0 : prev + 1));
    };

    const currentDoctor = doctors[currentIndex];

    return (
        <section className="doctors-section">
            <h2>Our Doctors</h2>

            <div className="doctor-card">
                <div className="doctor-image">
                    <img src={currentDoctor.image} alt={currentDoctor.name} />
                </div>
                <div className="doctor-info">
                    <h3>{currentDoctor.name}</h3>
                    <p className="qualifications">{currentDoctor.qualifications}</p>
                    <p className="specializations">{currentDoctor.specializations}</p>
                    <p className="experience">{currentDoctor.experience}</p>
                </div>
            </div>

            <button className="book-btn">Book An Appointment</button>

            <div className="carousel-nav">
                <button onClick={handlePrev} className="nav-btn">&lt;</button>
                <button onClick={handleNext} className="nav-btn">&gt;</button>
            </div>
        </section>
    );
};

export default OurDoctors;
