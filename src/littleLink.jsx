import React from 'react';
import {Link} from 'react-router-dom';
import './app.css';

function LittleLink(props){
    return <div>
         <ul>
              <h6 className="footer-title-29"> Company</h6>
               <li><Link to="/" className="company">{props.name}</Link></li>
              <li><Link to="/about" className="company"> {props.name1}</Link></li>
              <li><Link to="/services" className="company">{props.name2}</Link></li>
              <li><Link to="/contact" className="company">{props.name3} </Link></li> 
            
              
          
           
            </ul>
          </div>

}

export default LittleLink;