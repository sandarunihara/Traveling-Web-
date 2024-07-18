import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import NavBar from './Component/NavBar';
import Home from './Component/Home';
import About from './Component/About';
import ContactUs from './Component/ContactUs';
import { ThemeProvider } from './Component/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <NavBar/>
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
      </ThemeProvider>
  );
}

export default App;
