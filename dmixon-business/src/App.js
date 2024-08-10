import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import People from './components/People';
import DanielleBio from './components/DanielleBio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Individuals from './components/Individuals';
import Organizations from './components/Organizations';
import Landing from './components/Landing';
import Resources from './components/Resources';
import './App.css';

function App() {
  const title = "Haven Therapy & Consulting";
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <Router>
      {/* <div className="app-container">
        <div className="content-wrapper"> */}

          <Navbar />

          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Individuals" element={<Individuals />} />
            <Route path="Organizations" element={<Organizations />} />
            <Route path="People" element={<People />} />
            <Route path="Resources" element={<Resources />} />
            <Route path="DanielleBio" element={<DanielleBio />} />
          </Routes>
        {/* </div> */}
        <Footer />
       {/* </div> */}
    </Router>
  );
};
export default App;
