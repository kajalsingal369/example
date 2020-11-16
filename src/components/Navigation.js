import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav , NavDropdown , Button} from 'react-bootstrap';

class Navigation extends Component{
    render(){
        return(
            <Navbar bg='light' expands='lg'  inline>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <Nav className="p-2 bg-light text-dark ">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Fundstransfer">FundsTransfer</Nav.Link>
      <Nav.Link href="/FixedDeposits">FixedDeposits</Nav.Link>
      <NavDropdown title="Accounts" id="basic-nav-dropdown">
        <NavDropdown.Item href="/Accounts/Savings">Savings</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/Accounts/CreditBalance">CreditBalance</NavDropdown.Item>
         </NavDropdown>
         <Nav.Link href="/Profile">Profile</Nav.Link>
         <Button variant="outline-success">LogOut</Button>
    </Nav>
    
     
    
            </Navbar>
        )
    }

}





export default Navigation;