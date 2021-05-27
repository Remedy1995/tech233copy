import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook } from '@fortawesome/free-solid-svg-icons';

import Sitename from './sitename';
import LittleLink from './littleLink';
import Contactinfo from './contactinfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faFacebook,faTwitter,faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
function Footer(){
const date=new Date();
const date1=date.getFullYear();
    return <div>



        <footer className="w3l-footer-29-main">
      
    <div className="footer-29 py-5">
      <div className="container py-md-4">
  
        <div className="row footer-top-29">
  
          <div className="col-lg-4 col-md-6 footer-list-29 footer-1">
            <div className="footer-logo mb-4">
            
              <Sitename/>
            </div>
            <p>We are an Information Technology based company aimed at providing solutions to our clients through the implementation of Technology.</p>
            <div className="main-social-footer-29 mt-md-4 mt-3">

           
              <a href="#facebook" className="facebook">
           <span><FontAwesomeIcon icon={faFacebook} className="fa fa-facebook"/></span>   
              </a>
              <a href="#twitter" className="twitter">    <span><FontAwesomeIcon icon={faTwitter} className="fa fa-facebook"/></span>   </a>
              <a href="#instagram" className="instagram">    <span><FontAwesomeIcon icon={faInstagram} className="fa fa-facebook"/></span>   </a>
              <a href="#linkedin" className="linkedin">    <span><FontAwesomeIcon icon={faLinkedin} className="fa fa-facebook"/></span>   </a>
            </div>
          </div>
  
          <div className="col-lg-4 col-md-6 footer-list-29 footer-1 pr-lg-5 mt-md-0 mt-5">
           <Contactinfo address="Address :Ghana-Accra,Kasoa Nyanyano."  phone="+233(543) 661 399" phone1="+233(055) 2810 771" email="info@tech233.com"/>
          </div>
  
          <div className="col-lg-2 col-md-6 col-sm-5 col-6 footer-list-29 footer-2 mt-lg-0 mt-5">
            <ul>
             <LittleLink name="Home" name1="About" name2="Services" name3="Contact" />
            
            </ul>
          </div>
  
          <div className="col-lg-2 col-md-6 col-sm-5 col-6 footer-list-29 footer-2 mt-lg-0 mt-5">
           
          </div>
  
        </div>
  
      </div>
    </div>
   
    <section className="w3l-copyright text-center">
      <div className="container">
        <p className="copy-footer-29">© {date1} Tech2333. All rights reserved. Design by Tech233</p>
      </div>
  
      
      <button onclick="topFunction()" id="movetop" title="Go to top">
        &#10548;
      </button>
     
    </section>
  
  </footer>
  
  
  
    </div>
}



export default Footer;