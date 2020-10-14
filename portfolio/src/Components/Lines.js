import React from 'react'
//import Thumbnail from '../Thumbnail.js';
import Image from "react-image-enlarger";
//import Zoom from 'react-thumbnail-zoom'
import line1 from '../portfolioimg/line1.jpg'
import line2 from '../portfolioimg/line2.jpg'
import line3 from '../portfolioimg/line3.jpg'
import line4 from '../portfolioimg/line4.jpg'
import line5 from '../portfolioimg/line5.jpg'
import line6 from '../portfolioimg/line6.jpg'
import line7 from '../portfolioimg/line7.jpg'
import line8 from '../portfolioimg/line8.jpg'
import line9 from '../portfolioimg/line9.jpg'
import line10 from '../portfolioimg/line10.jpg'
import line11 from '../portfolioimg/line11.jpg'
import line12 from '../portfolioimg/line12.jpg'
import line13 from '../portfolioimg/line13.jpg'
import line14 from '../portfolioimg/line14.jpg'
import line15 from '../portfolioimg/line15.jpg'
import line16 from '../portfolioimg/line16.jpg'
import line17 from '../portfolioimg/line17.jpg'
import line18 from '../portfolioimg/line18.jpg'
import line19 from '../portfolioimg/line19.jpg'
import line20 from '../portfolioimg/line20.jpg'
import line21 from '../portfolioimg/line21.jpg'
import line22 from '../portfolioimg/line22.jpg'
import line23 from '../portfolioimg/line23.jpg'
import line24 from '../portfolioimg/line24.jpg'
import line25 from '../portfolioimg/line25.jpg'
import line26 from '../portfolioimg/line26.jpg'
import line27 from '../portfolioimg/line27.jpg'
import line28 from '../portfolioimg/line28.jpg'
import line29 from '../portfolioimg/line29.jpg'
import line30 from '../portfolioimg/line30.jpg'
import line31 from '../portfolioimg/line31.jpg'
import line32 from '../portfolioimg/line32.jpg'
import line33 from '../portfolioimg/line33.jpg'
import line34 from '../portfolioimg/line34.jpg'
import line35 from '../portfolioimg/line35.jpg'
import line36 from '../portfolioimg/line36.jpg'
import line37 from '../portfolioimg/line37.jpg'
import line38 from '../portfolioimg/line38.jpg'
import line39 from '../portfolioimg/line39.jpg'
import line40 from '../portfolioimg/line40.jpg'
import line41 from '../portfolioimg/line41.jpg'
import line42 from '../portfolioimg/line42.jpg'
import line43 from '../portfolioimg/line43.jpg'
import line44 from '../portfolioimg/line44.jpg'
import line45 from '../portfolioimg/line45.jpg'
import line46 from '../portfolioimg/line46.jpg'
import line47 from '../portfolioimg/line47.jpg'
import line48 from '../portfolioimg/line48.jpg'
import line49 from '../portfolioimg/line49.jpg'
import line50 from '../portfolioimg/line50.jpg'
import line51 from '../portfolioimg/line51.jpg'
import line52 from '../portfolioimg/line52.jpg'
import line53 from '../portfolioimg/line53.jpg'
import line54 from '../portfolioimg/line54.jpg'
import line55 from '../portfolioimg/line55.jpg'
import line56 from '../portfolioimg/line56.jpg'
import line57 from '../portfolioimg/line57.jpg'
import line58 from '../portfolioimg/line58.jpg'
import line59 from '../portfolioimg/line59.jpg'
import line60 from '../portfolioimg/line60.jpg'

import '../App.css';

 
function SingleSource({ src }) {
  const [zoomed, setZoomed] = React.useState(false);

  return (
     <div style={{ margin: "0.3rem" }}>
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

// images array. images in each group will be displayed horizontally.
// first element is the text that goes along with that group
const groups  = [
  {images: [line56, line57, line58, line59, line60]}, 
  {images: [line51, line52, line53, line54, line55]}, 
  {images: [line46, line47, line48, line49, line50]}, 
  {images: [line41, line42, line43, line44, line45]}, 
  {images: [line36, line37, line38, line39, line40]}, 
  {images: [line31, line32, line33, line34, line35]}, 
  {images: [line26, line27, line28, line29, line30]}, 
  {images: [line21, line22, line23, line24, line25]}, 
  {images: [line16, line17, line18, line19, line20]}, 
  {images: [line11, line12, line13, line14, line15]}, 
  {images: [line6, line7, line8, line9, line10]}, 
  {images: [line1, line2, line3, line4, line5,]},
  {images: [line21, line22]}
];



function Lines(props) {
  return (
    <div> <h1 className='pagetitle'>↓　　LINES　　↓</h1>
    <div style={{ display: "block" }}>
      {groups.map(one_group => (
        
        <div style={{ display: "block", textAlign: "left", paddingBottom: "50px"}}>
        <div className='imgimg' style={{ display: "flex" }}>
          {one_group.images.map(image =>(
            <SingleSource  key={image} src={image} />
        ))}
        </div> 
        
          <div className='imgtext'>
            {one_group.text }
          </div>
      
        </div>
       
        
      ))}
      </div>
    </div>
  );
}
 
export default Lines;