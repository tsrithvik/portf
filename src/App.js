// src/App.js
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.js'; // Ensure the correct import
import { Banner } from './components/Banner.js';
import { Skills} from './components/Skills.js';
import { Projects } from './components/Projects.js';
import { Education } from './components/Education.js';
import { Footer } from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <NavBar /> {/* Comments*/} 
      <Banner />
      <Skills />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
