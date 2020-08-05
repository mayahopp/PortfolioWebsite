import React from 'react'
//import Zoom from 'react-thumbnail-zoom'
import Image from "react-image-enlarger";
import Gallery from 'react-grid-gallery';
import chair1 from '../portfolioimg/chair1.jpg';
import chair2 from '../portfolioimg/chair2.jpg';
import chair3 from '../portfolioimg/chair3.jpg';
import font from '../portfolioimg/Font.jpg';
import fontd from '../portfolioimg/fontd.jpg';
import sky from '../portfolioimg/sky.jpg';
import building from '../portfolioimg/building.jpg';
import leaf from '../portfolioimg/leaf.jpg';
import manga from '../portfolioimg/manga.jpg';
import poster1 from '../portfolioimg/Poster2.png';
import poster2 from '../portfolioimg/Poster1.png';
import nomad from '../portfolioimg/NomadsJersey.jpg';
import nomadd from '../portfolioimg/jerseyshirt.jpg';
import full from '../portfolioimg/fullpiecee.jpg';
import c1 from '../portfolioimg/3collumn.jpg'
import c2 from '../portfolioimg/4collumn.jpg'
import c3 from '../portfolioimg/5collumn.jpg'
import c4 from '../portfolioimg/6collumn.jpg'
import c5 from '../portfolioimg/7collumn.jpg'
import c6 from '../portfolioimg/8collumn.jpg'
import c7 from '../portfolioimg/9collumn.jpg'
import c8 from '../portfolioimg/10collumn.jpg'
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
  {text: "digital illustration, 2020\nAdobe Photoshop", images:[full]},
  {text: "Japan Culture night poster at University of Oregon, Left:2019, Right:2018\nCreated on Autodesk Sketch Mobile App", images: [poster1, poster2]},
  {text: "Jersey desgined for a local cycling team, 2019\nChanged color of jerseys and added 'sportsclub' and '50th since 1986'\nCreated on Adobe Photoshop ", images: [nomad, nomadd]}, 
  {text: "Disintegrating chair trio, 2019\nCreated with Photoshop on Huion tablet", images: [chair1, chair2, chair3]}, 
  {text: "Created font, 2019\nCreated on Adobe Illustrator ", images: [font, fontd]}, 
  // {text: "text for group 4", images: [manga]},
  {text: "Sample templates created from Lawrence Weiner's 'declaration of intent', 2020 \ncreated on Adobe Illustrator", images: [c1, c2, c3, c4, c5, c6, c7, c8]},
  {text: "Small Photoshop projects based on juxtaposition, 2019", images: [ building, sky, leaf]}


];



function Digital(props) {
  return (
    <div> <h1 className='pagetitle'>↓　　DIGITAL　　↓</h1>
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
 


 