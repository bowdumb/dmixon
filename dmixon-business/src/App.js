import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const title = "D.Mixon Practices";
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
export default App;
