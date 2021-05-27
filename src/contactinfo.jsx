import React from 'react';



function Contactinfo(props){
    return <div>
         <h6 className="footer-title-29">Contact Info </h6>
            <p className="mb-2">{props.address}</p>
            <p className="mb-2">Phone Number : <a href="tel:+233(054) 543661399">{props.phone}</a></p>
            <p className="mb-2">Phone Number : <a href="tel:+233(055) 2810771">{props.phone1}</a></p>
            <p className="mb-2">Email : <a href="mailto:info@tech233.com">{props.email}</a></p>
           
    </div>
}

export default Contactinfo;