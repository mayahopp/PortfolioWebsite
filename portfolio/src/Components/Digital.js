import React from 'react'
import Zoom from 'react-thumbnail-zoom'
//import Thumbnail from '../Thumbnail.js';
import chair1 from '../portfolioimg/chair1.jpg';
import chair2 from '../portfolioimg/chair2.jpg';
import chair3 from '../portfolioimg/chair3.jpg';
import font from '../portfolioimg/Font.jpg';
import sky from '../portfolioimg/sky.jpg';
import manga from '../portfolioimg/manga.jpg';
import '../App.css';
import '../portfolioimg/chair1.jpg'

function Digital(props) {
  return (
    <div>
      
<h1> digital work</h1> 
      {/* <Zoom
        link= ""
        image={chair1}
        title="Chair #1"
      />
      <Zoom
        link= ""
        image={chair2}
        title="Chair #2"
      />
      <Zoom
        link= ""
        image={chair3}
        title="Chair #3"
      />
      <Zoom
        link= ""
        image={font}
        title="font"
      />
      <Zoom
        link= ""
        image={manga}
        title="manga"
      />
      <Zoom
        link= ""
        image={sky}
        title="sky"
      /> */}
      
      <Zoom>
      <img src={chair1} className='chair1'/>
      </ Zoom> 
    </div>
  )
}
 
export default Digital;