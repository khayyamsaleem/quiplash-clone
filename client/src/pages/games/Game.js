import React from 'react';
import './create.css';
import { Nav, Form, Row, Col, Button, Jumbotron } from 'react-bootstrap';
import Header from "../../components/header";

const Game = () => {
  return(
<>
  <div className="createPublic">
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

//https://pusher.com/tutorials/comment-voting-react-node
voting = event => {
       const { name, value } = event.target;
       this.setState({
         [name]: value,
       });
     };


class Scoreboard{
  constructor(playerScores){
    this.playerScores = playerScores;
  }

  scores(){
    return this.playerScores;
  }

}

class Player{
  constructor(name){
    this.name = name;
    this.score = 0;
  }

}

export default Game, voting;
