import React from 'react';
import '../App.css';
import logo from '../logo.png';
import { Nav, Navbar, Button, Container, Row, Col } from 'react-bootstrap';

export default class Header extends React.Component{
  render(){
    return(
      <>
        <Navbar fixed="top" style={{backgroundColor: '#00649b'}} expand="lg">
          <Navbar.Brand href="/">
            <img alt="quip logo" src={logo} style={{color: 'black'}} width="85" height="44.25" className="d-inline-block align-top"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" style={{ float: 'right'}}>
            <Nav>
              <Nav.Link href="/CreateRoom" style={{color: 'white'}}><Button style={{backgroundColor: '#66BB6A'}}>Create a Private Room</Button></Nav.Link>
              <Nav.Link href="/CreateRoom" style={{color: 'white'}}><Button style={{backgroundColor: '#26A69A'}}>Create a Public Room</Button></Nav.Link>
              <Nav.Link href="/JoinRoom" style={{color: 'white'}}><Button style={{backgroundColor: '#BA68C8'}}>Join a Room</Button></Nav.Link>
              <Nav.Link href="#" style={{color: 'white'}}><Button style={{backgroundColor: '#EF5350'}}>Add a Prompt</Button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  }
}