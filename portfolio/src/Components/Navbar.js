import React, { Component } from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import '../App.css'


class Navbar extends Component {

    updateMainContent = (newPage) => {
        this.props.callbackFunction(newPage);
    }
    render() {
        return (
            // <div>
            <div className="header">

            <ButtonToolbar className="justify-content-between">
                <Button className="btn-titletext" variant="link" onClick={() => this.updateMainContent("default")}>MAYA HOPPER</Button>

                <ButtonGroup>
                    {/* <Button variant="link" onClick={() => this.updateMainContent("analog")}>ANALOG</Button> */}
                    <Button variant="link" onClick={() => this.updateMainContent("illustration")}>ILLUSTRATION</Button>
                    <Button variant="link" onClick={() => this.updateMainContent("lines")}>LINES</Button>
                    <Button variant="link" onClick={() => this.updateMainContent("design")}>DESIGN</Button>
                    <Button variant="link" onClick={() => this.updateMainContent("about")}>ABOUT</Button>
                </ButtonGroup>
            </ButtonToolbar>
            </div>
        );
    }
    
  }
export default Navbar;
