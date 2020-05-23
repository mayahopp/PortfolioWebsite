import React, { Component } from 'react';
import '../App.css';
import About from './About.js'
import Projects from './Projects.js'


class MainContent extends Component {

    render() {
        if (this.props.content === "default") {
            return (<h1>default</h1>)
        }
        else if (this.props.content === "about") {
            return (<About />)
        }
        else if (this.props.content === "projects") {
            return (<Projects />)
        };
    }
    
  }

export default MainContent;
