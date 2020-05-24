import React, { Component } from 'react';
import '../App.css';
import About from './About.js'
import Projects from './Projects.js'
import Analog from './Analog.js'
import Digital from './Digital.js'
import Default from './Default.js'

class MainContent extends Component {

    render() {
        if (this.props.content === "default") {
            return(<Default />)
            // return (<h1>default</h1>)
        }
        else if (this.props.content === "about") {
            return (<About />)
        }
        else if (this.props.content === "analog") {
            return (<Analog />)
        }
        else if (this.props.content === "digital") {
            return (<Digital />)
        };
    }
    
  }

export default MainContent;
