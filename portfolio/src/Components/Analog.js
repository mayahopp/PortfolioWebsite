import React from 'react'
//import Thumbnail from '../Thumbnail.js';
import Image from "react-image-enlarger";
//import Zoom from 'react-thumbnail-zoom'
import kimono from '../portfolioimg/kimono.jpg'
import daniel from '../portfolioimg/daniel.jpg'
import face from '../portfolioimg/face.jpg'
import faced from '../portfolioimg/faced.jpg'
import squid from '../portfolioimg/squid.jpg'
import long from '../portfolioimg/long.jpg'
import rin from '../portfolioimg/rin.jpg'
import hair1 from '../portfolioimg/360hair1.jpg'
import hair2 from '../portfolioimg/360d1.jpg'
import hair3 from '../portfolioimg/360d4.jpg'
import hair4 from '../portfolioimg/360d3.jpg'
import squidd1 from '../portfolioimg/squidd1.jpg'
import squidd3 from '../portfolioimg/squidd3.jpg'
import squidd4 from '../portfolioimg/squidd4.jpg'
import kimonod1 from '../portfolioimg/kimonod1.jpg'
import kimonod2 from '../portfolioimg/kimonod2.jpg'
import kimonod3 from '../portfolioimg/kimonod3.jpg'
import longd4 from '../portfolioimg/longd4.jpg'
import longd2 from '../portfolioimg/longd2.jpg'
import longd3 from '../portfolioimg/longd3.jpg'
import '../App.css';
import '../portfolioimg/kimono.jpg'
 
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

// images array. images in each group will be displayed horizontally.
// first element is the text that goes along with that group
const groups = [
  {text: "Pen and ink\n14in x 18in", images: [kimono, kimonod3, kimonod2, kimonod1]}, 
  {text: "Pen and ink\n8.5in x 10.5", images: [daniel]}, 
  {text: "Pencil\n11in x 14in", images: [face, faced]},
  {text: "Pen\n22in x 30in", images: [squid, squidd1, squidd4, squidd3]},
  {text: "Pen\n14.5in x 25in", images: [long, longd2, longd3, longd4]},
  {text: "Pen\n13.5in x 17in", images: [rin]},
  {text: "Acrylic, canvas board, thread\nsize", images: [hair1, hair2, hair3, hair4]}
];



function Analog(props) {
  return (
    <div> <h1 className='pagetitle'>↓　　ANALOG　　↓</h1>
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
          <hr />
        </div>
       
        
      ))}
      </div>
    </div>
  );
}
 
export default Analog;