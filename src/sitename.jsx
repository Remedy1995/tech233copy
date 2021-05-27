import React from 'react';
import './app.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAlignRight} from '@fortawesome/free-solid-svg-icons';
function Sitename(){

    return <div>
          <h1>
          <a className="navbar-brand" href="index.html">
            <span> <FontAwesomeIcon  icon={faAlignRight}  className="logo-style"/>  </span> Tech233 <span className="logo">Vision to your Future</span></a>
        </h1>
     
    </div>
}


export default Sitename;