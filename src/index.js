import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './About/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Service from './About/Service';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />

      </Routes>
    </BrowserRouter>

   
  </>
);
