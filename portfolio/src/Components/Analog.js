import React from 'react'
import Thumbnail from '../Thumbnail.js';
import hair1 from '../portfolioimg/360hair1.jpg'
import chair1 from '../portfolioimg/chair1.jpg'
import '../App.css';
 
function Analog(props) {
  return (
    <div>
      <h1>Projects</h1>
      <Thumbnail
      link= "../portfolioimg/360hair1.jpg"
      image={hair1}
      title="360 Hair #1"
      
      />
      <Thumbnail
      link= ""
      image={chair1}
      title="Chair #1"
      
      />
    </div>
  )
}
 
export default Analog;