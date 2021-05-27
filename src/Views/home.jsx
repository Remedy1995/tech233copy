import React from 'react';
import Header from '../header';
import Slider from '../slider';
import '../app.css';
import Subscribe from '../Subscribe';
import Footer from '../footer';
import Services from '../services';
function Home(){
    return <div>
<Header/>
<Slider/>
<div>
    <Services/>
</div>

<Subscribe/>
<Footer/>
    </div>
}

export default Home;