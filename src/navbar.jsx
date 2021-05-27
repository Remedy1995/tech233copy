import React from 'react'
import {Switch,Link } from 'react-router-dom';
import './app.css';
function Navbar(){

    return <div>

          <div className="navStyle">
  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mx-lg-auto">
            <li className="nav-item active">              
            <Switch>
            <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
            </Switch>
            </li>
            <li className="nav-item @@about__active">                 
            <Switch>
            <Link className="nav-link" to="/about" >About</Link>
            </Switch>
            </li>
            <li className="nav-item @@services__active">          
            <Switch>
            <Link className="nav-link" to="/services">Services</Link>
            </Switch>
            </li>
            <li className="nav-item @@contact__active">                
            <Switch>
            <Link className="nav-link" to="/contact">Contact</Link>
            </Switch>
            </li>
          </ul>
          </div>
 </div>
    </div>
}

export default Navbar;