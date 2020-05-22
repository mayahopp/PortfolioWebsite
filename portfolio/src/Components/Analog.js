import React from 'react'
import Thumbnail from '../Thumbnail.js';
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
 
function Analog(props) {
  return (
    <div>
    <h2>Digital work</h2>

      <Thumbnail
      link= ""
      image={kimono}
      title="kimono"
      /> 
      <h2>kimono</h2>
      <Thumbnail
      link= ""
      image={daniel}
      title="daniel"
      /> 
      <Thumbnail
      link= ""
      image={rin}
      title="rin"
      /> 
      <Thumbnail
      link= ""
      image={face}
      title="face"
      /> 
      <Thumbnail
      link= ""
      image={squid}
      title="squid"
      /> 
      <Thumbnail
      link= ""
      image={long}
      title="long"
      /> 
      <Thumbnail
      link= ""
      image={hair1}
      title="hair1"
      /> 
     


{/*       
     <img src={kimono}  alt="kimono.jpg" className='kimono' />
     <img src={long}  alt="long.jpg" className='long' />
     <img src={rin}  alt="rin.jpg" className='rin' />
     <img src={face}  alt="face.jpg" className='face' />
     <img src={squid}  alt="squid.jpg" className='squid' />
     <img src={daniel}  alt="daniel.jpg" className='daniel' /> */}

      
    </div>
  )
}
 
export default Analog;