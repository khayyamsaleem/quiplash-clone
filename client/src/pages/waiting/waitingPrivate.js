import React from 'react';
import './waiting.css';
import {Button} from 'react-bootstrap';

export default class WaitingPrivate extends React.Component{
  render(){
    return(
      <>
        <div id="waitingPrivate">
          <div id="heading">
            <h1>{this.props.roomName}</h1>
            <h2 id="code">Room Code: {this.props.roomCode}</h2>
            <h2 id="time">Timer: </h2>
          </div>
          <div id="players">
            <h3>Player 1: {this.props.playerName}</h3>
            <h3>Player 2: </h3>
            <h3>Player 3: </h3>
            <h3>Player 4: </h3>
          </div>
          <Button variant="primary" type="submit">Start the Game!</Button>
        </div>
      </>
    )
  }
}