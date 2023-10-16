import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Individuals from './components/Individuals';
import Organizations from './components/Organizations';
import Welcome from './components/Welcome';
import Resources from './components/Resources';
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
          <Route path="/" element={<Welcome />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Individuals" element={<Individuals />} />
          <Route path="Organizations" element={<Organizations />} />
          <Route path="About" element={<About />} />
          <Route path="Resources" element={<Resources />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
export default App;
