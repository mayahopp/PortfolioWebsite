import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Projects from './Projects.js';
import About from './About.js';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      //set in router
      <Route path='/Projects' component={Projects} />
      <Route path='/About' component={About} />

       <div className="navigation">
        <img src={logo} className="logo" alt="Logo Image" />
        <div className="navigation-sub">
          //Links
          <Link to="/Projects" className="item">Projects</Link>
          <Link to ="/About" className="item">About</Link>
        </div>
      </div>
{/*       
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
