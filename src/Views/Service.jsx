import React from 'react';
import Header from '../header';
import b1 from '../images/b1.jpg';
import icon1 from '../images/icon1.png';
import s1 from '../images/s1.jpg';
import s2 from '../images/s2.jpg';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import {Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt} from '@fortawesome/free-solid-svg-icons';
import { faBuilding} from '@fortawesome/free-solid-svg-icons';
import { faClone} from '@fortawesome/free-solid-svg-icons';
import { faCode} from '@fortawesome/free-solid-svg-icons';
import { faChartBar} from '@fortawesome/free-solid-svg-icons';
import '../app.css';
import Footer from '../footer';

function Service(){

    return <div>
        <Header/>
        <section className="w3l-about-breadcrumb text-center" style={{ backgroundImage: `url(${b1})` }}>
    <div className="breadcrumb-bg breadcrumb-bg-about py-5">
        <div className="container py-lg-5 py-md-4">
            <h2 className="title pt-md-5 pt-4">Services</h2>
            <p className="inner-page-para mt-2">We Are here to Asist You</p>
        </div>
        <div className="hero-overlay"></div>
    </div>
</section>
<section className="w3l-features py-5" id="work">
    <div className="container py-lg-5 py-md-4 py-2">
        <div className="title-content text-center mb-md-5 mb-4">
            <h3 className="title-small"> Check our services</h3>
            <h3 className="title-big mx-lg-5">Services We Offer</h3>
        </div>
        <div className="row main-cont-wthree-2">
            <div className="col-lg-6">
                <div className="service-grid-left">
                    <img src={icon1} alt="" width="50px" className="img-fluid mb-3"/>
                    <h3 className="title-service mb-md-4 mb-3">Graphic Designs</h3>
                    <p className="text-para mb-lg-2 mb-0">Contact us For your Digital Printing,Large format Printing,Engraving,Branding,2D anad 3D Signages and L
                    </p>
                    <a href="#knowmore" className="btn btn-style btn-primary mt-lg-4 mt-4">Know More</a>
                    <Button variant="success" type="submit" className="buttonStyle"><p className="subi">Subscribe</p>

</Button>
                </div>
            </div>
            <div className="col-lg-6 service-grid-right mt-lg-0">
                <img src={s1} alt="" className="img-fluid"/>
            </div>
        </div>
        <div className="row mt-lg-4 mt-5">
            <div className="col-lg-6 service-grid-right mb-lg-0">
                <img src={s2} alt="" className="img-fluid"/>
            </div>
            <div className="col-lg-6">
                <div className="service-grid-left">
                    <img src={icon2} alt="" width="50px" className="img-fluid mb-3"/>
                    <h3 className="title-service mb-md-4 mb-3">Web ,Software Development and Mobile App Development</h3>
                    <p className="text-para mb-lg-2 mb-0">We develop websites for businesses,institutions,companies.Also develop softwares and mobile apps
                    for businesses to suit any needs.
                    </p>
                    <a href="#knowmore" className="btn btn-style btn-primary mt-lg-4 mt-4">Know More</a>
                    <Button variant="success" type="submit" className="buttonStyle"><p className="subi">Subscribe</p>

</Button>
                </div>
            </div>
        </div>


        <div className="row main-cont-wthree-2">
            <div className="col-lg-6">
                <div className="service-grid-left">
                    <img src={icon1} alt="" width="50px" className="img-fluid mb-3"/>
                    <h3 className="title-service mb-md-4 mb-3">Networking,Hardware,Software,Server and Cctv Installations</h3>
                    <p className="text-para mb-lg-2 mb-0">We configure networks,Hardware,Software installations and upgrade,Configure server and cctv for institutions,churches and many more.
                    </p>
                    <a href="#knowmore" className="btn btn-style btn-primary mt-lg-4 mt-4">Know More</a>
                    <Button variant="success" type="submit" className="buttonStyle"><p className="subi">Subscribe</p>

</Button>
                </div>
            </div>
            <div className="col-lg-6 service-grid-right mt-lg-0">
                <img src={s1} alt="" className="img-fluid"/>
            </div>
        </div>
    </div>
</section>
<section className="w3l-aboutblock1" id="services">
    <div className="midd-w3 py-5">
        <div className="container py-lg-5 py-md-4 py-2">
            <div className="title-content text-center mb-md-5 mb-4">
                <h3 className="title-small"> Beautifully crafted creative solutions</h3>
                <h3 className="title-big mx-lg-5">What industries we serve?</h3>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 grids-feature">
                    <div className="area-box">
                     <FontAwesomeIcon icon={faMoneyBill} className="logo-style2" />
                        
                        <div className="area-box-info">
                            <h4><a href="#feature" className="title-head">Churches</a></h4>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grids-feature mt-md-0 mt-4">
                    <div className="area-box">
                    <FontAwesomeIcon icon={faFileAlt} className="logo-style2" />
                        <div className="area-box-info">
                            <h4><a href="#feature" className="title-head">Commercial Projects</a></h4>
                           
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grids-feature mt-lg-0 mt-4">
                    <div className="area-box">
                    <FontAwesomeIcon icon={faBuilding} className="logo-style2" />
                        <div className="area-box-info">
                            <h4><a href="#feature" className="title-head">Banking & Finance</a></h4>
                        
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grids-feature mt-4">
                    <div className="area-box">
                    <FontAwesomeIcon icon={faClone} className="logo-style2" />
                        <div className="area-box-info">
                            <h4><a href="#feature" className="title-head">Coporate Institutions/Firms</a></h4>
                     
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grids-feature mt-4">
                    <div className="area-box">
                    <FontAwesomeIcon icon={faCode} className="logo-style2" />
                        <div className="area-box-info">
                            <h4><a href="#feature" className="title-head">Schools</a></h4>
                           
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 grids-feature mt-4">
                    <div className="area-box">
                    <FontAwesomeIcon icon={faChartBar} className="logo-style2" />
                        <div className="area-box-info">
                            <h4><a href="#feature" className="title-head">Hospitals</a></h4>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="w3l-features py-5" id="work">
    <div className="container py-lg-5 py-md-4 py-2">
        <div className="title-content text-center mb-md-5 mb-4">
            <h3 className="title-small"> Beautifully crafted creative solutions</h3>
            <h3 className="title-big mx-lg-5">Our Project Developmental Steps</h3>
        </div>
        <div className="row main-cont-wthree-2 align-items-center">
            <div className="col-lg-4 col-md-6">
                <div className="grids-1 box-wrap">
                    <div className="icon">
                        <img src={icon1} alt="" className="img-fluid"/>
                    </div>
                    <h4><a href="#service" className="title-head mb-3">Initiation And Planning</a></h4>
                    <p className="text-para">The first part of developing a successful project is to make sure that you are entirely sure of everything that needs to be done.
                    Planning includes organizing what will be done, when and by whom. It needs to be detailed and well thought out to ensure that nothing is missed, carrying out risk assessments and making sure that everyone has what they need to be able to do the tasks that are required of them.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                <div className="grids-1 box-wrap">
                    <div className="icon">
                        <img src={icon2} alt="" className="img-fluid"/>
                    </div>
                    <h4><a href="#service" className="title-head mb-3">Execution And Control</a></h4>
                    <p className="text-para">Now you have your project properly planned, you can start executing it. Make sure that you stick to your plan as closely as possible,
                     and have a communication hub where stakeholders can collaborate on progress.Control needs to be carried out during the execution stage. This is where you need to try to ensure that the plan is kept to as closely as possible and that you are regularly 
                     monitoring it to ensure that the project doesn’t spin out of control. </p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                <div className="grids-1 box-wrap">
                    <div className="icon">
                        <img src={icon3} alt="" className="img-fluid"/>
                    </div>
                    <h4><a href="#service" className="title-head mb-3">Closure</a></h4>
                    <p className="text-para">Once that the project is finished, it is recommended that you write a closing report, giving a summary of the project, how well you managed to keep to the plan, any changes that you had to make and why,
                     and what you would do differently if you were to carry it out again </p>
                </div>
            </div>
        </div>
    </div>
</section>
<Footer/>
    </div>
}

export default Service;