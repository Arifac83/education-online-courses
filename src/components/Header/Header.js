import React from 'react';
import logo  from '../../images/logo.png';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Header.css';


const Header = () => {
    return (
        <div>                                  
              <h3 className="header-title"><img className="logo" src={logo}/>Education Online Courses</h3>  
                <div className="container">
                    <Navbar bg="primary" variant="dark">
                        <Navbar.Brand href="#home"><img src={logo}/></Navbar.Brand> 
                        <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#courses">Courses</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>                    
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button className="btn btn-primary" variant="outline-light">Search</Button>
                        </Form>
                    </Navbar>  
                </div>                     
        </div>
    );
};

export default Header;