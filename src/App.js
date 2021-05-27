
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './navbar';
import Contact from './Views/contact';
import Service from './Views/Service';
import About from './Views/about';
import Home from './Views/home';
import { BrowserRouter as Router,Route } from 'react-router-dom';


// import { BrowserRouter } from 'react-router-dom';
// import Contact from './contact';
// import Home from './home';
// import  {Navbar} from 'react-bootstrap';
// import {Nav} from 'react-bootstrap';
// import Services from './services';
// import Header from './header';
// import Subscribe from './Subscribe';
// import Footer from './footer';
// import About from './about';
// import Service from './Service';

//import {Form} from 'react-bootstrap';
//import {label} from 'react-bootstrap';
//import {header} from 'react-bootstrap';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import {NavDropdown} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
{/* 
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar> */}
{/* <Header/>
 <Services/>
<Subscribe/>
<Footer/> */}
{/* <About/> */}

{/* <Service/> */}

{/* <Contact/> */}
{/* <BrowserRouter>
<Home/>
</BrowserRouter> */}
<Router>


<Route path="/" exact>
<Home/>
   </Route>

   <Route path="/about">
<About/>
   </Route>
   <Route path="/services">
<Service/>
   </Route>
   <Route path="/contact">
<Contact/>
   </Route>
 </Router>



 </div>
    
  );
}

export default App;
