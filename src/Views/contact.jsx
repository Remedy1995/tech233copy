import React from 'react';
import Header from '../header';
import b1 from '../images/b1.jpg';
import '../app.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap} from '@fortawesome/free-solid-svg-icons';
import { faMobile} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Allinfo from '../Allinfo';
import Footer from '../footer';

function Contact(){



    return <div><Header/>
     <section className="w3l-about-breadcrumb text-center" style={{ backgroundImage: `url(${b1})` }}>
    <div className="breadcrumb-bg breadcrumb-bg-about py-5">
        <div className="container py-lg-5 py-md-4">
            <h2 className="title pt-md-5 pt-4">Contact Us</h2>
            <p className="inner-page-para mt-2">We are an agency located in Ghana</p>
        </div>
        <div className="hero-overlay"></div>
    </div>
</section>
    <section className="w3l-contact-main py-5" id="contact">
    <div className="container pt-lg-5 pt-md-3">
        <div className="title-content text-center mb-md-5 mb-4">
            <h3 className="title-big mx-lg-5">We are a full Information Technology Based Firm </h3>
            <p className="text-para mt-2"> </p>
        </div>
        <div className="w3l-contact-info">
            <div className="row contact-infos">
                <div className="col-lg-4 col-md-6">
                    <div className="single-contact-infos">
                        <div className="icon-box"> <FontAwesomeIcon icon={faMap} className="logo-style2" /></div>
                        <div className="text-box">
                            <h3 className="mb-2">Our Location</h3>
                            <p>{Allinfo[0].Address}</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                    <div className="single-contact-infos">
                        <div className="icon-box">  <FontAwesomeIcon icon={faMobile} className="logo-style2" /></div>
                        <div className="text-box">
                            <h3 className="mb-2">Give us a call</h3>
                            <p><a href={"tel:+"+Allinfo[0].Phone}>{Allinfo[0].Phone}</a></p>
                            <p><a href={"tel:+"+Allinfo[0].Phone1}>{Allinfo[0].Phone1}</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                    <div className="single-contact-infos">
                        <div className="icon-box"> <FontAwesomeIcon icon={faEnvelope} className="logo-style2" /></div>
                        <div className="text-box">
                            <h3 className="mb-2">Help Desk</h3>
                            <p> <a href={"mailto:"+Allinfo[0].email}>{Allinfo[0].email}</a></p>
                            <p> <a href={"mailto:"+Allinfo[0].email1}>{Allinfo[0].email1}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    
    <section className="w3l-contact-main" id="contact">
  <div className="contact-infhny py-5">
    <div className="container py-lg-3">
      <div className="top-map">
        <div className="map-content-9">
          <form action="https://sendmail.w3layouts.com/submitForm" method="post">
            <div className="form-top1">
              <h3 className="title-big text-center mb-2">Get In Touch With Us</h3>
              <p className="mb-lg-5 mb-4 text-center">We have made it easy for clients to reach us and get their solutions
                weaved</p>
              <div className="form-top">
                <div className="form-top-left">
                  <input type="text" name="w3lName" id="w3lName" placeholder="Name" required=""/>
                  <input type="number" name="w3lPhone" placeholder="Your phone number" required=""/>
                  <input type="email" name="w3lSender" id="w3lSender" placeholder="Email*" required=""/>
                  <input type="text" name="w3lSubject" id="w3lName" placeholder="Subject" required=""/>
                </div>
                <div className="form-top-righ">
                  <textarea name="w3lMessage" id="w3lMessage" placeholder="Message*" required=""></textarea>
                </div>
              </div>
              <div className="text-lg-right text-center">
                <button type="submit" className="btn btn-style btn-primary">Submit Now</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

<Footer/>
    </div>
   
}



export default Contact;