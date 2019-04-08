import React from 'react';
import '../App.css';
import logo from '../logo.png';
// import GenButton from './components/Button';
// import Scoreboard from './components/Scoreboard';
import { Nav, Navbar, Button, Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import join_room from "./join_room";
import CreateRoom from "./CreateRoom";

const Header = () => (
  <>




      <Navbar fixed="top" bg="info" expand="lg">
        <Navbar.Brand href="/">
          <img alt="quip logo" src={logo} width="85" height="44.25" className="d-inline-block align-top"/>
        </Navbar.Brand>
        {/* <Nav.Link href="#" style={{color:'white'}}>About</Nav.Link> */}
        <Container className="justify-content-end">
          <Row>
            <Nav.Link href="/CreateRoom"><Col><Button variant="primary">Create a Room</Button></Col></Nav.Link>
            <Nav.Link href="/join_room"><Col><Button variant="success">Join a Room</Button></Col></Nav.Link>
            <Nav.Link href="#"><Col><Button variant="danger">Add a Prompt</Button></Col></Nav.Link>
          </Row>
        </Container>
      </Navbar>



      {/* <div className="contentContainer" id="second">
        <h2>Play now!</h2>
        <Container>
          <Row>
            <Col><Button variant="primary">Create a Room</Button></Col>
            <Col><Button variant="success">Join a Room</Button></Col>
            <Col><Button variant="danger">Add a Prompt</Button></Col>
          </Row>
        </Container>
      </div> */}

      {/* <div className="contentContainer" id="third">
        <hr />
        <Scoreboard />
      </div> */}


  </>
)

export default Header;
