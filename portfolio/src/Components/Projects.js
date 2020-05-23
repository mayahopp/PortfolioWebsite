import React, {Component} from 'react'
//import Thumbnail from '../Thumbnail.js';
//import Thumbnail from 'react-thumbnail';
import hair1 from '../portfolioimg/360hair1.jpg'
import chair1 from '../portfolioimg/chair1.jpg'
import '../App.css';
 
class Projects extends Component { 
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <h2>Hair1:</h2>
        <img src={hair1} />

        <h2>Chair1:</h2>
        <img src={chair1} />
      </div>
    )
  }
}
 
export default Projects;