import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Projects from './Projects.js';
import About from './About.js';
import './Navbar.css';
import face from './portfolioimg/face.jpg';

function App() {
  return (
    <div>
    <BrowserRouter>
    <div className="App">

      {/*set in router */}
      <Route path='/Projects' component={Projects} />
      <Route path='/About' component={About} />

      <h1>MAYA HOPPER </h1>
       <div className="navigation">
     
        <div className="navigation-sub">
          {/*Links */}
          <Link to="/Projects" className="item">PROJECTS</Link>
          <Link to ="/About" className="item">ABOUT</Link>
          <Link to ="/something" className="item">SOMETHINGV</Link>
          
        </div>
      </div>

    </div>
    </BrowserRouter>

    <img src={face}  alt="face.jpg" />
    </div>
  );
}

export default App;
