import React, { Component } from 'react';
import image from '../portfolioimg/home1.jpg';
import '../App.css';

function Default(props) {
    return (
      <div>
          {/* <h1>default page</h1> */}
        <img src={image} className='image'/>
        </div>
    )
  }

  export default Default;