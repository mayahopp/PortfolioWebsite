import React, { Component } from 'react';
import image from '../portfolioimg/home1.jpg';
import image2 from '../portfolioimg/kimono.jpg';
import '../App.css';
import { Carousel } from 'react-responsive-carousel';
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';





function Default(props) {
    return (
      <div>{/* <div>
          
        <img src={image} className='image'/>
        </div>
 */}
        

        
          <Carousel>
              <div>
              <img src={image} className='image'/>
                  <p className="ichi">Legend 1</p>
              </div>
              <div>
              <img src={image2} className='image2'/>
                  <p className="ni">Legend 2</p>
              </div>
              
          </Carousel>
        



{/* 
 <div className="default-links">
        <ButtonToolbar className="default">
            

            <ButtonGroup>
                <Button variant="link" onClick={() => this.updateMainContent("analog")}>ANALOG</Button>
                <Button variant="link" onClick={() => this.updateMainContent("digital")}>DIGITAL</Button>
                <Button variant="link" onClick={() => this.updateMainContent("about")}>ABOUT</Button>
            </ButtonGroup>
        </ButtonToolbar>
        </div> */}
        </div>
    )
      }
    
    


  
  
  export default Default;