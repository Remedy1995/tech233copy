
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAlignRight } from '@fortawesome/free-solid-svg-icons';
// import { faSearch} from '@fortawesome/free-solid-svg-icons';
// import Search from './search';
import {Carousel} from 'react-bootstrap';
import b1 from './images/b1.jpg';
import b2 from './images/b2.jpg';
import b3 from './images/b3.jpg';
import {Button} from 'react-bootstrap';


import {Animated} from "react-animated-css";



function Slider(){



    const custom={

        fontSize: "18px",
        lineHeight: "18px",
        fontWeight: "750",
        transition: "0.3s ease-in",
        borderRadius: "var(--border-radius)",
        backgroundColor: "#00a63f",
        borderColor: "#00a63f",
        padding: "15px 50px",
        position:"relative",
        right:"450px",
        top:"300px"
    
      }
      const headingStyle={
        color:"white",
        fontSize:"55px",
      position:"relative",
      top:"300px"
      }
    
      const subHeading={
        color:"white",
        fontSize:"20px",
      position:"relative",
      top:"300px"
      }
    
    return <div> <Carousel>
   
    <Carousel.Item>
    
      <img
       
        src={b1}
        alt="First slide"
      />
      <Carousel.Caption  className="hero-overlay" style={{left:"0px",zIndex:"0"}}>
      <Animated  animationIn="flipInX" animationOutDelay="1000" animationInDuration="2000" isVisible={true} >
      <div>
          <h1 style={headingStyle} >Web Development,Software And Mobile App Development</h1>
      </div>
  </Animated>
  <Animated  animationIn="fadeInDown" animationOutDelay="2000" animationInDuration="1500" isVisible={true}>
      <div> <p style={subHeading} ></p>
          <p style={subHeading}>Providing Solutions through the implementation of technology</p>
      </div>
  </Animated>
   <Animated  animationIn="fadeInDown" animationOutDelay="3000" animationInDuration="3000"  isVisible={true} >
  
  <Button variant="success" style={custom}>Learn More</Button>
                  
  </Animated>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
   
      <img
        src={b2}
        alt="Second slide"
      />
  
      <Carousel.Caption  className="hero-overlay" style={{left:"0px",zIndex:"0"}}>
      <Animated  animationIn="fadeInUp" animationOutDelay="1000" animationInDuration="2000" isVisible={true} >
      <div>
          <h1 style={headingStyle} >Graphic Designs</h1>
      </div>
  </Animated>
  <Animated  animationIn="fadeInDown" animationOutDelay="2000" animationInDuration="1500" isVisible={true} >
      <div> <p style={subHeading} >Providing Solutions through the implementation of technology</p>
          <p style={subHeading}></p>
      </div>
  </Animated>
   <Animated  animationIn="fadeInDown" animationOutDelay="3000" animationInDuration="3000"  isVisible={true} >
  
  <Button variant="success" style={custom}>Learn More</Button>
                  
  </Animated>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item >
    
      <img
       
        src={b3}
        alt="Third slide"
      />
  
      <Carousel.Caption  className="hero-overlay" style={{left:"0px",zIndex:"0"}}>
      <Animated  animationIn="fadeInDown" animationOutDelay="1000" animationInDuration="2000" isVisible={true} >
      <div>
          <h1 style={headingStyle} >Network,Software And Hardware,Cctv Installations</h1>
      </div>
  </Animated>
  <Animated  animationIn="fadeInDown" animationOutDelay="2000" animationInDuration="1500" isVisible={true} >
      <div> <p style={subHeading} ></p>
          <p style={subHeading}>Digital transformation driven
                          by technology</p>
      </div>
     
  </Animated>
  <Animated  animationIn="fadeInDown" animationOutDelay="3000" animationInDuration="3000"  isVisible={true} >
  
  <Button variant="success" style={custom}>Learn More</Button>
                  
  </Animated>
   
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  <div className="shape">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
              <path fill-opacity="1">
                  <animate attributeName="d" dur="20000ms" repeatCount="indefinite" values="M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z; M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,133.3C672,107,768,117,864,138.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;												 M0,64L48,74.7C96,85,192,107,288,133.3C384,160,480,192,576,170.7C672,149,768,75,864,80C960,85,1056,171,1152,181.3C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                                                   M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;"></animate>
  
              </path>
  
          </svg>
      </div>
     </div>
}


export default Slider;