import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
import s3 from './images/s3.jpg';
import s2 from './images/s2.jpg';
import s1 from './images/s1.jpg';



function Services(){
  //use hook to update when the mouse is hovered on the screen
  
  const [color,setColor]=useState("");

const styles={
  color:color,
  "text-decoration": "none"
}

function name()
{
  setColor("");
}

return <div>





<div className="w3l-servicesblock2" id="services">
    <section id="grids5-block" className="py-5">
        <div className="container py-lg-5 py-md-4 py-2">
            <h3 className="title-big text-center">Always there for your care, our Services</h3>
            <div className="row mt-lg-5 mt-4 text-center">
                <div className="col-lg-4 col-md-6">
                    <div className="grids5-info">
                        <a href="#service" className="d-block zoom"><img src={s1} alt=""
                                className="img-fluid service-image" /></a>
                        <div className="blog-info">
                            <a href="#service" className="status" style={styles} onMouseEnter={()=>setColor("green")} onMouseLeave={() => this.setColor("")}>Graphic Designs</a>
                            <p className="text-para"></p>
                        </div>
                        {/* <a href="#learnmore" className="btn btn-style1 mt-3">Learn More</a>
                        <Router >
                   <Link to = 'https://google.com/' className="btn btn-style1 mt-3" >Learn More</Link>

                          </Router> */}
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-md-0 mt-5">
                    <div className="grids5-info">
                        <a href="#service" className="d-block zoom"><img src={s2} alt=""
                                className="img-fluid service-image" /></a>
                        <div className="blog-info">
                            <a href="#service" className="status"  style={styles} onMouseEnter={()=>setColor("green")} onMouseLeave={() => setColor("")}>Software Engineering And Development</a>
                            <p className="text-para"></p>
                        </div>
                        {/* <a href="#learnmore" className="btn btn-style1 mt-3">Learn More</a>
                        <Router >
                   <Link to = 'https://google.com/' className="btn btn-style1 mt-3" >Learn More</Link>

                          </Router> */}
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-lg-0 mt-5">
                    <div className="grids5-info">
                        <a href="#service" className="d-block zoom">
                        <img src={s3} alt="" className="img-fluid service-image" /></a>
                        <div className="blog-info">
                            <a href="#service" className="status"  style={styles} onMouseEnter={()=>setColor("green")} onMouseLeave={name}>Networking,Hardware,Cctv Installations And More</a>
                            <p className="text-para"> </p>
                        </div>
                        {/* <Router >
                   <Link to = 'https://google.com/' className="btn btn-style1 mt-3" >Learn More</Link>

                          </Router> */}


                
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

</div>;
}

export default Services;