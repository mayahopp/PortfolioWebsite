import React from "react";
import facehome from '../portfolioimg/face.jpg';
 
function Home(props) {
  return (
    <div>
     <img src={facehome}  alt="face.jpg" className='facehome' />
    </div>
  )
}
 
export default Home;