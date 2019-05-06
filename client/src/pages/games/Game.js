import React from 'react';
import './game.css';
import { Nav, Row, Col, Button, Jumbotron } from 'react-bootstrap';
import Header from "../../components/header";

const Game = () => {
  return(
<>
  <div className="create">
  <Header/>
  <Jumbotron>
    <h1>Round #</h1>
    <p>
      SAMPLE PROMPT HERE
    </p>
  </Jumbotron>
  <Row>
    <Col>
      {/* we need to figure out how to hold button animation until all
        user votes go through or time runs out */}
      <Nav.Link href="#"><Button variant="light">QUIP 1 HERE </Button></Nav.Link>
    </Col>
    <Col>
      <Nav.Link href="#"><Button variant="dark">QUIP 2 HERE</Button></Nav.Link>
    </Col>
  </Row>
  </div>
</>

  )

}

class Player{
  constructor(name){
    this.name = name;
    this.score = 0;
  }

  setScore(number){
    this.score = number;
  }
  
}

export default Game;
