import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Projects from './Components/Projects.js';
import About from './Components/About.js';
import Home from './Components/Home.js';
import './Navbar.css';


function App() {
  return (
    <div>
    <BrowserRouter>
    <div className="App">

      <h1>MAYA HOPPER </h1>
       <div className="navigation">
     
        <div className="navigation-sub">
          {/*Links */}
          <Link to="/Projects" className="item">PROJECTS</Link>
          <Link to ="/About" className="item">ABOUT</Link>
          <Link to ="/Home" className="item">HOME</Link>
          
        </div>
      </div>

    </div>
      <Route exact path='/' component={Home} />
      <Route path='/Home' component={Home} />
      <Route path='/Projects' component={Projects} />
      <Route path='/About' component={About} />

    </BrowserRouter>


    </div>
  );
}

export default App;
