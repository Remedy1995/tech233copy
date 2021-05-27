import React from 'react';
import Header from './header';
import b1 from './images/b1.jpg';
import about2 from './images/about2.jpg';
import {Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchway} from '@fortawesome/free-solid-svg-icons';
import { faHandPointRight} from '@fortawesome/free-solid-svg-icons';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import  ab from './images/ab.jpg';
import ab2 from './images/ab2.jpg'; 
import bg1 from './images/bg1.jpg';
import team3 from './images/team3.jpg';
import team4 from  './images/team4.jpg';
import team2 from './images/team2.jpg';
import team1 from './images/team1.jpg';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {faSearchPlus} from '@fortawesome/free-solid-svg-icons';
import {faCogs} from '@fortawesome/free-solid-svg-icons';
import {faChartArea} from '@fortawesome/free-solid-svg-icons';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

import Footer from './footer';


function About(){
    return <div>
        <Header/>
       
        <section className="w3l-about-breadcrumb text-center">
    <div className="breadcrumb-bg breadcrumb-bg-about py-5" style={{ backgroundImage: `url(${b1})` }}>
        <div className="container py-lg-5 py-md-4">
            <h2 className="title pt-md-5 pt-4">About Us</h2>
            <p className="inner-page-para mt-2">Experience you can trust, service you can count on.</p>
        </div>
        <div className="hero-overlay"></div>
    </div>
</section>

<section className="w3l-aboutblock1" id="about">
    <div className="midd-w3 py-5">
        <div className="container py-lg-5 py-md-4 py-2">
            <div className="row">
                <div className="col-lg-6 left-wthree-img">
                    <div className="position-relative">
                        <img src={about2} alt="" className="img-fluid radius-image-full"/>
                        <div className="bg-shape"> </div>
                        <div className="imginfo__box">
                            <div className="imginfo__info">
                                <h6 className="age">25+</h6>
                                <p className="mt-1">Years of <br/>Experience. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mt-lg-0 mt-5 about-right-faq align-self">
                    <h5 className="title-small mb-1">About our company</h5>
                    <h3 className="title-big">We are the next generation of the business world, creative solutions</h3>
                    <h4 className="mt-4">Over 25 years, We complete every project with extra care as customer needs.</h4>
                    <p className="mt-4">Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                        ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Non quae, fugiat consequatur voluptatem ad.</p>
                        <Button variant="success" type="submit" className="buttonStyle1">Read More

</Button>

                    <a href="#small-dialog1" className="popup-with-zoom-anim play-view text-center position-absolute mt-md-4 mt-3 pt-md-3">
                       
                    </a>
                 
                    <div id="small-dialog1" className="zoom-anim-dialog mfp-hide">
                        {/* <iframe  allow={autoplay,fullscreen} allowfullscreen=""></iframe> */}
                    </div>
                </div>
            </div>

            <div className="row justify-content-center mt-5 pt-lg-5">
                <div className="col-lg-4 col-md-6 grids-feature">
                    <div className="area-box">
                    <FontAwesomeIcon  icon={faArchway}  className="logo-style2"/>
                        <div className="area-box-info">
                            <h4><a href="#feature" className="title-head">Perfect Design</a></h4>
                            <p>Amus a ligula quam tesque et ut justo, Duis sed dolor et amet.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grids-feature mt-md-0 mt-4">
                    <div className="area-box">
                    <FontAwesomeIcon  icon={faHandPointRight}  className="logo-style2"/>
                        <div className="area-box-info">
                            <h4><a href="#feature" className="title-head">Carefully Planned</a></h4>
                            <p>Amus a ligula quam tesque et ut justo, Duis sed dolor et amet.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grids-feature mt-lg-0 mt-4">
                    <div className="area-box">
                    <FontAwesomeIcon  icon={faAngleLeft}  className="logo-style2"/>
                        <div className="area-box-info">
                            <h4><a href="#feature" className="title-head">Smartly Execute</a></h4>
                            <p>Amus a ligula quam tesque et ut justo, Duis sed dolor et amet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="w3l-about2 py-5">
    <div className="container py-lg-5 py-md-4 py-2">
        <div className="row cwp23-content align-items-center">

            <div className="col-lg-6">
                <h5 className="title-small mb-3"> Web design and digital marketing </h5>
                <h3 className="title-big"> We think strategy, UX design, and web development </h3>

                <div className="cwp23-text-cols mt-lg-5 mt-4">

                    <div className="column">
                        <span>1200+</span>
                        <h4>Happy Clients</h4>
                        <p>We help our clients increase profits by increasing their visibility online.</p>
                    </div>

                    <div className="column">
                        <span>13k+</span>
                        <h4>Completed projects </h4>
                        <p>We help our clients increase profits by increasing their visibility online. </p>
                    </div>

                </div>
            </div>

            <div className="col-lg-3 col-6 cwp23-text align-self mt-lg-0 mt-md-5 mt-4 pr-md-3 pr-2">
                <img src={ab} alt="" className="radius-image img-fluid"/>
            </div>

            <div className="col-lg-3 col-6  cwp23-text align-self mt-lg-0 mt-md-5 mt-4 pl-md-3 pl-2">
                <img src={ab2} alt="" className="radius-image img-fluid"/>
            </div>
        </div>
    </div>
    </section>
    <section className="w3l-about4 py-5" id="cover" style={{ backgroundImage: `url(${bg1})` }}>
		<div className="container px-0 py-lg-5 py-md-4 py-2">
			<div className="history-info position-relative">
				<div className="heading mx-auto text-center">
					<h3 className="title-big">We are the next generation of the business world, creative solutions</h3>
					<p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit sunt in culpa qui officia
						sed deserunt mollit anim id est laborum mollit anim id est nulla.</p>
					<a href="#small-dialog" className="popup-with-zoom-anim play-view text-center mt-4">
						<span className="video-play-icon">
							<span className="fa fa-play"></span>
						</span>
					</a>
				</div>
				<div className="position-relative">
					
					<div id="small-dialog" className="zoom-anim-dialog mfp-hide">
						{/* <iframe src="https://www.youtube.com/embed/2N247cY2bEw" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe> */}
					</div>
				</div>
			</div>
		</div>
	</section>
    <section className="w3l-team py-5" id="team">
    <div className="container py-lg-5 py-md-4 py-2">
        <h5 className="title-small text-center"> Our Professionals </h5>
        <h3 className="title-big text-center mx-0 mb-lg-5 mb-4">Meet the Team </h3>
        <div className="row team-row">
            <div className="col-lg-3 col-sm-6 team-wrap">
                <div className="team-member text-center">
                    <div className="team-img">
                        <img src={team1} alt="" className="img-fluid radius-image" />
                        <div className="overlay">
                            <div className="team-details text-center">
                                <p>
                                    Our web design team will spend time with our digital marketing team.
                                </p>
                                <div className="socials mt-4">
                                    <a href="#url"><i className="fa fa-facebook"></i></a>
                                    <a href="#url"><i className="fa fa-twitter"></i></a>
                                    <a href="#url"><i className="fa fa-google-plus"></i></a>
                                    <a href="#url"><i className="fa fa-envelope"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#team"><h6 className="team-title">	Amelia Jessica</h6></a>
                    <p>Designer</p>
                </div>
            </div>
          

            <div className="col-lg-3 col-sm-6 team-wrap mt-sm-0 mt-5">
                <div className="team-member text-center">
                    <div className="team-img">
                        <img src={team2} alt="" className="img-fluid radius-image" />
                        <div className="overlay">
                            <div className="team-details text-center">
                                <p>
                                    Our web design team will spend time with our digital marketing team.
                                </p>
                                <div className="socials mt-4">
                                    <a href="#url"><i className="fa fa-facebook"></i></a>
                                    <a href="#url"><i className="fa fa-twitter"></i></a>
                                    <a href="#url"><i className="fa fa-google-plus"></i></a>
                                    <a href="#url"><i className="fa fa-envelope"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#team"><h6 className="team-title">Elizabeth Tracy</h6></a>
                    <p>Photographer</p>
                </div>
            </div>
           

            <div className="col-lg-3 col-sm-6 team-wrap mt-lg-0 mt-5">
                <div className="team-member last text-center">
                    <div className="team-img">
                        <img src={team3} alt="" className="img-fluid radius-image" />
                        <div className="overlay">
                            <div className="team-details text-center">
                                <p>
                                    Our web design team will spend time with our digital marketing team.
                                </p>
                                <div className="socials mt-4">
                                    <a href="#url"><i className="fa fa-facebook"></i></a>
                                    <a href="#url"><i className="fa fa-twitter"></i></a>
                                    <a href="#url"><i className="fa fa-google-plus"></i></a>
                                    <a href="#url"><i className="fa fa-envelope"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#team"><h6 className="team-title">Charlotte Ava</h6></a>
                    <p>Designer</p>
                </div>
            </div>
         

            <div className="col-lg-3 col-sm-6 team-wrap mt-lg-0 mt-5">
                <div className="team-member last text-center">
                    <div className="team-img">
                        <img src={team4} alt="" className="img-fluid radius-image" />
                        <div className="overlay">
                            <div className="team-details text-center">
                                <p>
                                    Our web design team will spend time with our digital marketing team.
                                </p>
                                <div className="socials mt-4">
                                    <a href="#url"><i className="fa fa-facebook"></i></a>
                                    <a href="#url"><i className="fa fa-twitter"></i></a>
                                    <a href="#url"><i className="fa fa-google-plus"></i></a>
                                    <a href="#url"><i className="fa fa-envelope"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#team"><h6 className="team-title">Emma Susan</h6></a>
                    <p>Designer</p>
                </div>
            </div>
           

        </div>
    </div>
</section>
<section className="w3l-content-4 py-5" id="features">
    <div className="content-4-main py-lg-5 py-md-4">
        <div className="container">
            <div className="title-content text-center">
                <h3 className="title-small"> Why choose us</h3>
                <h3 className="title-big mx-lg-5">People choose us because we serve the best for everyone</h3>
            </div>
            <div className="content-info-in row mt-5 pt-lg-5">
                <div className="content-left col-lg-6">
                    <div className="row content4-right-grids mb-sm-5 mb-4">
                        <div className="col-2 content4-right-icon">
                            <div className="content4-icon icon-clr1">
                            <FontAwesomeIcon  icon={faBriefcase}  className="logo-style2"/>
                            </div>
                        </div>
                        <div className="col-10 content4-right-info pl-md-5 pl-4">
                            <h6><a href="#url">Planning your business</a></h6>
                            <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio
                                adipisicing.</p>
                        </div>
                    </div>
                    <div className="row content4-right-grids mb-sm-5 mb-4">
                        <div className="col-2 content4-right-icon">
                            <div className="content4-icon icon-clr2">
                            <FontAwesomeIcon  icon={faSearchPlus}  className="logo-style2"/>
                            </div>
                        </div>
                        <div className="col-10 content4-right-info pl-md-5 pl-4">
                            <h6><a href="#url">Doing research for your clients</a></h6>
                            <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio
                                adipisicing.</p>
                        </div>
                    </div>
                </div>
                <div className="content-right col-lg-6 pl-lg-4 mt-lg-0 mt-2">
                    <div className="row content4-right-grids mb-sm-5 mb-4">
                        <div className="col-2 content4-right-icon">
                            <div className="content4-icon icon-clr3">
                            <FontAwesomeIcon  icon={faCogs}  className="logo-style2"/>
                            </div>
                        </div>
                        <div className="col-10 content4-right-info pl-md-5 pl-4">
                            <h6><a href="#url">Create business process</a></h6>
                            <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio
                                adipisicing.</p>
                        </div>
                    </div>
                    <div className="row content4-right-grids">
                        <div className="col-2 content4-right-icon">
                            <div className="content4-icon icon-clr4">
                            <FontAwesomeIcon  icon={faChartArea}  className="logo-style2"/>
                            </div>
                        </div>
                        <div className="col-10 content4-right-info pl-md-5 pl-4">
                            <h6><a href="#url">We make the best strategies</a></h6>
                            <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio
                                adipisicing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="w3l-project-contact py-5">
    <div className="container py-md-5 py-sm-4 py-2">
        <div className="row">
            <div className="col-lg-8">
                <div className="bottom-info">
                    <div className="header-section">
                        <h3 className="title-big">Let's talk about your project and see how we can work together</h3>
                        <p className="mt-3 pr-lg-5">Lorem ipsum dolor sit amet elit. Velit beatae
                            rem ullam dolore nisi esse quasi, sit amet. Lorem ipsum dolor sit
                            amet elit.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 align-self text-lg-right">
                         <Button variant="success" type="submit" className="btn-style">Get started on a project
<span> <FontAwesomeIcon  icon={faArrowRight}  className="logo-style3"/></span>
</Button>

            </div>
        </div>
    </div>
</section>
<Footer/>
    </div>
}

export default About;