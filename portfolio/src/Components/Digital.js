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
import '../App.css';
import '../portfolioimg/chair1.jpg'


function SingleSource({ src }) {
  const [zoomed, setZoomed] = React.useState(false);

  return (
    <div style={{ margin: "0.25rem" }}>
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
  {text: "Chair group\nibwow\n", images: [chair1, chair2, chair3]}, 
  {text: "text for group 4", images: [poster1, poster2]},
  {text: "text for group 2", images: [font]}, 
  {text: "text for group 3", images: [sky]},
  {text: "text for group 4", images: [manga]},

];



function Digital(props) {
  return (
    <div> <h1>DIGITAL</h1>
    <div style={{ display: "block" }}>
      
      {groups.map(one_group => (
        
        <div style={{ display: "block", textAlign: "left", paddingBottom: "100px"}}>
          
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