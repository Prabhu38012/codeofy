import React from 'react';
import Header from './components/Header';
import BookAppointment from './components/BookAppointment';
import AboutClinic from './components/AboutClinic';
import OurDoctors from './components/OurDoctors';
import WhyChoose from './components/WhyChoose';
import Treatments from './components/Treatments';
import DoctorVideos from './components/DoctorVideos';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <BookAppointment />
      <AboutClinic />
      <OurDoctors />
      <WhyChoose />
      <Treatments />
      <DoctorVideos />

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-newmi">newmi</span>
            <span className="logo-care">care</span>
          </div>
          <p>© 2024 Newmi Care. All rights reserved.</p>
          <p className="footer-address">
            First Floor, Spaze Corporate Park, Shop No. 150 & 158,<br />
            Opp. Tulip Chowk, Sector 69, Gurugram, Haryana 122101
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
