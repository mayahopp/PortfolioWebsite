import React from 'react'
//import Thumbnail from '../Thumbnail.js';
import chair1 from '../portfolioimg/chair1.jpg';
import chair2 from '../portfolioimg/chair2.jpg';
import chair3 from '../portfolioimg/chair3.jpg';
import font from '../portfolioimg/Font.jpg';
import sky from '../portfolioimg/sky.jpg';
import manga from '../portfolioimg/manga.jpg';
import '../App.css';
import Thumbnail from 'react-thumbnail';
 
function Digital(props) {
  return (
    <div>
      
<h1> digital work</h1> 
      <Thumbnail
        link= ""
        image={chair1}
        title="Chair #1"
      />
      <Thumbnail
        link= ""
        image={chair2}
        title="Chair #2"
      />
      <Thumbnail
        link= ""
        image={chair3}
        title="Chair #3"
      />
      <Thumbnail
        link= ""
        image={font}
        title="font"
      />
      <Thumbnail
        link= ""
        image={manga}
        title="manga"
      />
      <Thumbnail
        link= ""
        image={sky}
        title="sky"
      />
      
    </div>
  )
}
 
export default Digital;