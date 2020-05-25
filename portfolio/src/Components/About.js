import React, {Component} from "react"
//import face from '../portfolioimg/face.jpg';


class About extends Component { 
  render() {
    return (
    <div className='aboutpara'>
      
      <p className='startp'>My name is Maya Hopper and I am a Junior at the University of Oregon majoring in Art and Technology.</p>
      <h2>Location</h2>
      <p>Portland, Oregon <br />
        Eugene, Oregon
      </p>
      <h2>Education</h2>
      <p>University of Oregon class of 2021
        Major in Art and Technology, minor in Japanese and Computer Information Technology.
      </p>
      <h2>Job History</h2>
      <h3>2020</h3>
          <p>March 2017 - Present <br />
           Childeren's Intensive In-Home Services<br />
          Personal Care Worker
          </p>
      <h3>2019</h3>
            <p>June 2019 - September 2019<br />
              Yamato Transport <br /> mover
            </p>
      <h3>2018</h3>
           <p>July 2018 - September 2018<br />
             My favorite Muffin<br />Server
            </p>
            <p>July 2018 - August 2018<br />
            Yamato Transport<br /> packing 
             </p>
      <h3>2017</h3>
         <p>June - September
           Imagine Possibilities
            Direct Support Professional
            </p>
      <h2>Exposure to</h2>
      <li>Adobe Photoshop </li>
      <li>Adobe illustertor </li>
      <li>HTML & CSS</li>
      <li>React</li>
      <li>JavaScript</li>
      <li>MySQL</li>
    </div>
      );
    }
  }
 export default About;