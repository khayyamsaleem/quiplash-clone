import React from 'react';
import '../App.css';
import logo from '../logo.png';
import { Nav, Navbar, Button, Container, Row, Col } from 'react-bootstrap';

export default class NavBar extends React.Component{
  render(){
    return(
      <>
        <Navbar fixed="top" style={{backgroundColor: '#00649b'}} expand="lg">
          <Navbar.Brand href="/">
            <img alt="quip logo" src={logo} width="85" height="44.25" className="d-inline-block align-top"/>
          </Navbar.Brand>
          
          <Container className="justify-content-end">
            <Row>
              <Nav.Link href="/CreateRoom"><Col><Button variant="primary">Create a Room</Button></Col></Nav.Link>
              <Nav.Link href="/join_room"><Col><Button variant="success">Join a Room</Button></Col></Nav.Link>
              <Nav.Link href="#"><Col><Button variant="danger">Add a Prompt</Button></Col></Nav.Link>
            </Row>
          </Container>
        </Navbar>
      </>
    )
  }
}