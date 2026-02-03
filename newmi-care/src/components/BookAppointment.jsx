import React, { useState } from 'react';
import './BookAppointment.css';

const BookAppointment = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        location: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Appointment Booked:', formData);
        alert('Appointment request submitted successfully!');
    };

    return (
        <section className="book-appointment-section">
            <div className="appointment-card">
                <h2>Book Appointment</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Location</label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-btn">
                        Book An Appointment
                    </button>
                </form>
            </div>
        </section>
    );
};

export default BookAppointment;
