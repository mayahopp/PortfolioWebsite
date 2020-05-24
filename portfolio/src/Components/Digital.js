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
      <Zoom>
      <img src={chair1} className='chair1'/>
      </ Zoom> 
    
      <Zoom>
      <img src={chair2} />
      </ Zoom> 
    </div>
  )
}
 
export default Digital;