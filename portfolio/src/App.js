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
import StickyFooter from 'react-sticky-footer';
import instai from './portfolioimg/Insta.png';
import linki from './portfolioimg/linkedinn.png'
import maili from './portfolioimg/mail.png'
import './App.css'


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
<StickyFooter
    bottomThreshold={50}
    normalStyles={{
    backgroundColor: "#CED0CE",
    padding: "0.5rem"
    }}
    stickyStyles={{
    backgroundColor: "rgba(255,255,255,.8)",
    padding: "0.6rem"
    }}
>
    <a href="mailto:maya.l.hopper@gmail.com"><img src={maili} className='icons'></img> </a>
    <a href="https://www.linkedin.com/in/maya-hopper-5a31a7183/"><img src={linki} className='icons'></img> </a>
    <a href="https://www.instagram.com/maya.hop/"><img src={instai} className='icons'></img> </a>


</StickyFooter>

</div>

  );
}}


export default App;
