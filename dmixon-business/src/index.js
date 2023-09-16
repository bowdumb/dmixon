import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function App() {
  const title = 'D.Mixon Theraputic Practices';
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <Router>
      <div>
        <NavBar />

        <Routes>
          <Route path = "/" element = {<About />} />
          <Route path = "/Contact" element = {<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;