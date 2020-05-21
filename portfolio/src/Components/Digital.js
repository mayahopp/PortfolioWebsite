import React from 'react'
import Thumbnail from '../Thumbnail.js';
import chair1 from '../portfolioimg/chair1.jpg';
import chair2 from '../portfolioimg/chair2.jpg';
import chair3 from '../portfolioimg/chair3.jpg';
import '../App.css';
 
function Digital(props) {
  return (
    <div>
     <img src={chair1}  alt="chair1.jpg" className='chair1' />
     <img src={chair2}  alt="chair2.jpg" className='chair2' />
     <img src={chair3}  alt="chair3.jpg" className='chair3' />
 
    </div>
  )
}
 
export default Digital;