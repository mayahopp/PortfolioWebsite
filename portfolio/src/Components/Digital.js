import React from 'react'
//import Zoom from 'react-thumbnail-zoom'
import Image from "react-image-enlarger";

//import Thumbnail from '../Thumbnail.js';
import chair1 from '../portfolioimg/chair1.jpg';
import chair2 from '../portfolioimg/chair2.jpg';
import chair3 from '../portfolioimg/chair3.jpg';
import font from '../portfolioimg/Font.jpg';
import sky from '../portfolioimg/sky.jpg';
import manga from '../portfolioimg/manga.jpg';
import poster1 from '../portfolioimg/Poster2.png';
import poster2 from '../portfolioimg/Poster1.png';
import nomad from '../portfolioimg/NomadsJersey.jpg';
import '../App.css';
import '../portfolioimg/chair1.jpg'


function SingleSource({ src }) {
  const [zoomed, setZoomed] = React.useState(false);

  return (
    <div style={{ margin: "0.5rem" }}>
      <Image
        style={{ width: "200px", height: "auto" }}
        zoomed={zoomed}
        src={src}
        onClick={() => setZoomed(true)}
        onRequestClose={() => setZoomed(false)}
      />
    </div>
  );
}

const groups = [
  {text: "2019\nCreated with Photoshop", images: [chair1, chair2, chair3]}, 
  {text: "Posters created for Japan Culture night at University of Oregon\nLeft:2019   Right:2018\nCreated on Autodesk Sketch Mobile App", images: [poster1, poster2]},
  {text: "Jersey desgined for a local cycling team\nAdded sportsclub and 50th since 1986\n2019\nCreated on Adobe Photoshop ", images: [nomad]}, 
  {text: "Created font\n2019\nCreated on Adobe Illusterator ", images: [font]}, 
  {text: "Pieces made for fun on photoshop", images: [sky]},
  {text: "text for group 4", images: [manga]},

];



function Digital(props) {
  return (
    <div> <h1>↓　　DIGITAL　　↓</h1>
    <h4>Click to enlarge images</h4>
    <div style={{ display: "block" }}>
      
      {groups.map(one_group => (
        
        <div style={{ display: "block", textAlign: "left", paddingBottom: "50px"}}>
          
        <div className='imgimg' style={{ display: "flex" }}>
          {one_group.images.map(image =>(
          <SingleSource  key={image} src={image} />
        ))}
        </div>
        <div className='imgtext'>
        {one_group.text}
        </div>
        <hr />
        </div>
        
      )
 
      ) }
      </div>
    </div>
  );
}
 
export default Digital;