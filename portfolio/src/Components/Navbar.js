import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css'

//import '../App.css';


class Navbar extends Component {

    updateMainContent = (newPage) => {
        this.props.callbackFunction(newPage);
    }
    render() {
        return (
            <div>
            <div className="header">
             {/* <h1 className='title'>MAYA HOPPER</h1>  */}
            

             {/* <div class="btn-group"> */}
             <Button variant="link" onClick={() => this.updateMainContent("about")}>About</Button>
                <Button variant="link" onClick={() => this.updateMainContent("digital")}>Digital</Button>
                <Button variant="link" onClick={() => this.updateMainContent("analog")}>Analog</Button>
             {/* </div> */}

            

             </div>
              <div className='titletext'>
              <Button variant="link" onClick={() => this.updateMainContent("default")}>MAYA HOPPER</Button>
              </div>
              </div>
        );
    }
    
  }
export default Navbar;
