import React from 'react';
import './waiting.css';

export default class WaitingPrivate extends React.Component{
  render(){
    return(
      <>
        <div id="waitingPrivate">
          <div id="heading">
            <h1>{this.props.roomName}</h1>
            <h2 id="code">Room Code: {this.props.roomId}</h2>
            <h2 id="time">Timer: </h2>
          </div>
          <div id="players">
          </div>
        </div>
      </>
    )
  }
}