import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { BrowserRouter, Route, Link } from 'react-router-dom';
// import './App.css';
// import Analog from './Components/Analog.js'
// import About from './Components/About.js';
// import Home from './Components/Home.js';
// import Digital from './Components/Digital.js';
// import './Navbar.css';
// import MenuListComposition from './Components/Navigation.js';
import Navbar from './Components/Navbar.js';
import MainContent from './Components/MainContent.js';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "default"
    };
  }

  updateContent = (pageToDisplay) => {
    this.setState({content: pageToDisplay})
  };

  render() { 
    return (
    
    <div>
    {/* <MenuListComposition />
    <Home />   */}

    {/* <BrowserRouter> */}
    <div className="App">
      <Navbar callbackFunction = {this.updateContent}/>
     
      <MainContent content={this.state.content} />
       {/* <div className="navigation">
       

        <div className="navigation-sub">
          <Link to ="/About" className="item">ABOUT</Link>
          <Link to="/Analog" className="item">ANALOG</Link>
          <Link to="/Digital" className="item">DIGITAL</Link>
          <Link to ="/Home" className="item">HOME</Link>
          
          
        </div>
      </div> */}

    </div>
    
      {/* <Route exact path='/' component={About} />
      <Route path='/Home' component={Home} />
      <Route path='/Analog' component={Analog} />
      <Route path='/Digital' component={Digital} />
      <Route path='/About' component={About} />


    </BrowserRouter>   */}


</div>

  );
}}


export default App;
