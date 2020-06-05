import React, {Component} from "react"
import face from '../portfolioimg/face.jpg';


class About extends Component { 
  render() {
    return (
    <div className='aboutpara'>
      <div>
        {/* <img src={face} className='aboutmep' /> */}
      </div>
      <p className='startp'>Hello, my name is Maya Hopper and I am currently a 
      junior at the University of Oregon studying Art and Technology. 
      I have been interested in the arts since childhood, and have recently started
       working digitally to achieve further connection with digital media, including adding artistic approaches to programming. This portfolio website is made with React native by me! 
< br/></p>
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
           Personal Care Worker at Childeren's Intensive In-Home Services
          </p>
      <h3>2019</h3>
            <p>June 2019 - September 2019<br />
              Mover at Yamato Transport
            </p>
      <h3>2018</h3>
           <p>July 2018 - September 2018<br />
             Server at My Favorite Muffin
            </p>
            <p>July 2018 - August 2018<br />
            Packing at Yamato Transport
             </p>
      <h3>2017</h3>
         <p>June 2017 - September 2017<br />
           Direct Supprt Professiional at Imagine Possibilities
            </p>
      <h2>Exposure to</h2>
      <li>Adobe Photoshop </li>
      <li>Adobe illustertor </li>
      <li>Wacom Tablet</li>
      <li>HTML & CSS</li>
      <li>React</li>
      <li>JavaScript</li>
      <li>MySQL</li>
    </div>
      );
    }
  }
 export default About;