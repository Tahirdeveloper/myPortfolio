import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NavMenu from './components/Navbar';

function App() {
  return (
    <>
    <NavMenu />
    <BrowserRouter>
    
     <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/About"  element= {<About />} />
        <Route path="/Projects" element = {<Projects />}/>
        <Route path="/Contact" element = {<Contact />}/>
     </Routes>
     
    </BrowserRouter>
    </>
  );
}

export default App;
