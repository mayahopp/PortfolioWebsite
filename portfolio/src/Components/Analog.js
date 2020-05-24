import React from 'react'
//import Thumbnail from '../Thumbnail.js';
import Image from "react-image-enlarger";
//import Zoom from 'react-thumbnail-zoom'
import kimono from '../portfolioimg/kimono.jpg'
import daniel from '../portfolioimg/daniel.jpg'
import face from '../portfolioimg/face.jpg'
import squid from '../portfolioimg/squid.jpg'
import long from '../portfolioimg/long.jpg'
import rin from '../portfolioimg/rin.jpg'
import hair1 from '../portfolioimg/360hair1.jpg'
import hair2 from '../portfolioimg/360hair2.jpg'
import hair3 from '../portfolioimg/360hair3.jpg'
import hair4 from '../portfolioimg/360hair4.jpg'
import '../App.css';
import '../portfolioimg/kimono.jpg'
 
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

const images = [
  kimono, daniel, face, squid, long, rin, hair1, hair2, hair3, hair4
];


function Analog(props) {
  return (
    <div style={{ display: "flex" }}>
      {images.map(image => (
        <SingleSource key={image} src={image} />
      ))}
    </div>
  );
}
 
export default Analog;