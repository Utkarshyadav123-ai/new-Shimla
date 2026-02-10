import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from "./App.jsx";
import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";

import Package from "./components/Package.jsx";
import Latest from"./components/Latest.jsx";
import AppLayout from"./components/AppLayout.jsx";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
        <Route path="/"element={<AppLayout/>}>
        <Route index element ={<Home />}/>
        <Route path="/about" element={<About />} />
       
         <Route path="/packages" element={<Package />} />
          <Route path="/contact" element={<Contact />} />
              <Route path="/latest" element={<Latest />} />
          </Route>
    </Routes>
    
    
    </BrowserRouter>
)