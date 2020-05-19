import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Projects from './Projects.js';
import About from './About.js';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      {/*set in router */}
      <Route path='/Projects' component={Projects} />
      <Route path='/About' component={About} />

       <div className="navigation">
     
        <div className="navigation-sub">
          {/*Links */}
          <Link to="/Projects" className="item">Projects</Link>
          <Link to ="/About" className="item">About</Link>
        </div>
      </div>

    </div>
    </BrowserRouter>
  );
}

export default App;
