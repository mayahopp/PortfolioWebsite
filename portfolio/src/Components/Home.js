import React from "react";
import face from '../portfolioimg/face.jpg';
 
function Home(props) {
  return (
    <div>
     <img src={face}  alt="face.jpg" className='face' />
    </div>
  )
}
 
export default Home;