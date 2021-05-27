
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import map from './images/map.png';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './app.css';



function Subscribe(){


   
    return <div>

<section className="w3l-project py-5" id="subscribe" style={{ backgroundImage: `url(${map})` }}>

    <div className="container py-md-5 py-sm-4 py-2">
        <div className="bottom-info">
            <div className="header-section text-center">
                <h3 className="title-big">SignUp For Our NewsLetter</h3>
                <p className="mt-3 pr-lg-5">Enter your email on here to get updates from Tech233</p>
            </div>
            <Form>
  <Form.Group controlId="formBasicEmail">
  <div className="emailborder">
  <FontAwesomeIcon icon={faPaperPlane} className="plane" /></div>
    <Form.Label>Email address</Form.Label>
    <Form.Control  type="email" placeholder="Enter Your email" className="name">
    </Form.Control>
    
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="" />
  </Form.Group>
  <Button variant="success" type="submit" className="buttonStyle"><p className="subi">Subscribe</p>

  </Button>
</Form>
           
        </div>
    </div>

</section>
    </div>


}

export default Subscribe;