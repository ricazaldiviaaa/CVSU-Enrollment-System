import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import Router components
import Home from './components/Home';
import Application from './Admission/Application'; // Import Enroll component
import About from './components/About';
import Gallery from './components/Gallery';
import Courses from './components/Courses';
import Location from './components/Location';
import Footer from './components/Footer';

import './css/landingpage.css';
import './css/Application.css';
import './js/script.jsx';
import './App.css';

import OfficerDashboard from './OfficerDashboard/OfficerDashboard.jsx';
import StudentDashboard from './StudentDashboard/StudentDashboard.jsx';
import './css/Officer.css';
import './js/Officer';


function App() {
  return (
    <Router>
      <div className="website-container">
        <Routes>
          {/* Main route for the website layout */}
          <Route path="/" element={<><Home /><About /><Gallery /><Courses /><Location /><Footer /></>} />

          {/* Separate route for Application (with no common sections like Footer or Home) */}
          <Route path="/Application" element={<Application />} />

          <Route path="/StudentDashboard" element={<StudentDashboard />} />
          
        </Routes>
        
      </div>
      

      {/* <div id="app">
      <Sidebar />
      <section id="content">
        <Navbar />
        <OfficerDashboard/>
      </section>
      </div> */}
    </Router>

    
  );
}


export default App;
