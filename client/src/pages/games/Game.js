import React from 'react';
import './create.css';
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




class Scoreboard{
  constructor(playerScores){
    this.playerScores = playerScores;
  }

  scores(){
    return this.playerScores;
  }

  sort(){
    var swapped;
      do {
        swapped = false;
        for(var i = 0; i < this.playerScores.length; i++) {
          if(this.playerScores[i] && this.playerScores[i + 1] && this.playerScores[i].score > this.playerScores[i + 1].score) {
            var temp = new Player();
            temp = this.playerScores[i];
            this.playerScores[i] = this.playerScores[i+1];
            this.playerScores[i+1] = temp;
            console.log("hi")
            swapped = true;
          }
        }
      } while(swapped);


  }

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
