import React from 'react'
import Thumbnail from './Thumbnail.js';
import './App.css';
 
function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <Thumbnail
      link= ""
      image=""
      title="b"
      category="website "
      />
      <Thumbnail
      link= "/twitter"
      image=""
      title="a"
      category="mobile app"
      />
    </div>
  )
}
 
export default Projects;