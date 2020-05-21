import React from "react"
import face from '../portfolioimg/face.jpg';
 
function About(props) {
  return (
    <div>
      
      <img src={face}  alt="face.jpg" className='face' />

      <div>
<h1>About</h1>
<p>My name is maya Hopper</p>

<p>contact</p>
<ul> 
  <li>one</li>
  <li>two</li>
</ul>
    </div>
    </div>
    
  )
}
 
export default About;