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

const images = [
  chair1,
  chair2
];


function Digital(props) {
  return (
    <div style={{ display: "flex" }}>
      {images.map(image => (
        <SingleSource key={image} src={image} />
      ))}
    </div>
  );
}
 
export default Digital;