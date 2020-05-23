import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

//import '../App.css';


class Navbar extends Component {

    updateMainContent = (newPage) => {
        this.props.callbackFunction(newPage);
    }
    render() {
        return (
            <div className="header">
             <h1>MAYA HOPPER</h1>

             {/* <div class="btn-group"> */}
                <Button variant="link" onClick={() => this.updateMainContent("projects")}>Projects</Button>
                <Button variant="link" onClick={() => this.updateMainContent("about")}>About</Button>
             {/* </div> */}
             </div>
        
        );
    }
    
  }
export default Navbar;
