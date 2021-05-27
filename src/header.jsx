import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import Sitename from './sitename';
import Search from './search';
// import {Carousel} from 'react-bootstrap';
// import b1 from './images/b1.jpg';
// import b2 from './images/b2.jpg';
// import b3 from './images/b3.jpg';
// import {Button} from 'react-bootstrap';
// import Slider from './slider';
// import {Animated} from "react-animated-css";
// import About from './about';
// import Manatee from '../Manatee/Manatee';
// import Narwhal from '../Narwhal/Narwhal';
// import Whale from '../Whale/Whale';
import './app.css';
import Navbar from './navbar';


function Header(props){
const [isdisplay,setdisplay]=useState(false);

function handleClick(){
setdisplay(true)
}
    return <div>
   
<header id="site-header" className="fixed-top">


    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark stroke">
      <Sitename/>

 <p>{isdisplay?<Search/>:null}</p>
          <a className="navbar-brand" href="#index.html">
              <img src="image-path" alt="" title="" style={{height:"35"}}/>
          </a>
        <button className="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse"
          data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
          aria-label="Toggle navigation">
          
          <FontAwesomeIcon  icon={faBars}  className="navbar-toggler-icon fa icon-expand fa-bars"/> 
        
          <FontAwesomeIcon  icon={faTimes}  className="navbar-toggler-icon fa icon-close fa-times"/> 
        </button>
  
        {/*
   */}
   <Navbar/>
         
          <div className="header-search">
            <div className='control mr-3'>
              <div className='btn-material'>
                <i></i>
                <FontAwesomeIcon icon={faSearch}  className='fa fa-search icon-material-search' onClick={handleClick}/>
              </div>
            </div>
      
            <i className='icon-close fa fa-close material-icons'></i>
          
          </div>
       
          <div className="mobile-position">
            <nav className="navigation">
              <div className="theme-switch-wrapper">
                <label className="theme-switch" for="checkbox">
                  <input type="checkbox" id="checkbox"/>
                  <div className="mode-container py-1">
                    <i className="gg-sun"></i>
                    <i className="gg-moon"></i>
                  </div>
                </label>
              </div>
            </nav>
          </div>
       
      </nav>

    </div>
  </header>
  
  



   
  </div>
  


}


export default Header;