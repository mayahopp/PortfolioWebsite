import React, { Component } from 'react';
import '../App.css';
import About from './About.js'
import Illustration from './Illustration.js'
import Analog from './Analog.js'
import Design from './Design.js'
import Lines from './Lines.js'
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
        else if (this.props.content === "illustration") {
            return (<Illustration />)
        }
        else if (this.props.content === "lines") {
            return (<Lines />)
        }
        else if (this.props.content === "analog") {
            return (<Analog />)
        }
        else if (this.props.content === "design") {
            return (<Design />)
        };
    }
    
  }

export default MainContent;
