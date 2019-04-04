import React from 'react';
import '../App.css';
import logo from '../logo.png';
// import GenButton from './components/Button';
// import Scoreboard from './components/Scoreboard';
import { Nav, Navbar, Button, Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import join_room from "./join_room";
import Header from "./header";

const Home = () => (
  <>



    <div className="App">
      <Header/>
      <div className="contentContainer heading" id="first">
        <h1 id="title">Quip Thinking</h1>
        <h4 id="byline">the online game of witty lines</h4>
      </div>

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
    </div>

  </>
)

export default Home;
