import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Analog from './Components/Analog.js'
import About from './Components/About.js';
import Home from './Components/Home.js';
import Digital from './Components/Digital.js';
import './Navbar.css';
import MenuListComposition from './Components/Navigation.js';



function App() {
  return (
    
    <div>
    {/* <MenuListComposition />
    <Home />   */}

    <BrowserRouter>
    <div className="App">

     
       <div className="navigation">
       <h1>MAYA HOPPER </h1>
        <div className="navigation-sub">
          <nav>
         
          <Link to ="/About" className="item">ABOUT</Link>
          <Link to="/Analog" className="item">ANALOG</Link>
          <Link to="/Digital" className="item">DIGITAL</Link>
          <Link to ="/Home" className="item">HOME</Link>
          
          </nav>
        </div>
      </div>

    </div>
    
      <Route exact path='/' component={About} />
      <Route path='/Home' component={Home} />
      <Route path='/Analog' component={Analog} />
      <Route path='/Digital' component={Digital} />
      <Route path='/About' component={About} />


    </BrowserRouter>  


</div>

  );
}

export default App;
