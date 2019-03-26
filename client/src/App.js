import React from 'react';
import './App.css';
import logo from './logo.png';
import GenButton from './components/Button';
import Scoreboard from './components/Scoreboard';
import { Nav, Navbar, Button, Container, Row, Col } from 'react-bootstrap';

const App = () => (
  <>
    <Navbar fixed="top" bg="info">
      <Navbar.Brand href="#home">
        <img alt="quip logo" src={logo} width="85" height="44.25" className="d-inline-block align-top"/>
      </Navbar.Brand>
      <Nav.Link href="#">About</Nav.Link>
    </Navbar>

    <div className="title">
      <h1>Quip Thinking</h1>
      <h4>the online game of witty lines</h4> 
    </div>

    <Container>
      <Row>
        <Col><Button variant="primary">Create a Room</Button></Col>
        <Col><Button variant="success">Join a Room</Button></Col>
        <Col><Button variant="danger">Add a Prompt</Button></Col>
      </Row>
    </Container>
    <hr />
    <Scoreboard />
  </>
)

export default App;
