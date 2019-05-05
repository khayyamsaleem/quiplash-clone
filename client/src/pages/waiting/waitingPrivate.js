import React from 'react';
import './waiting.css';
import {Button} from 'react-bootstrap';
import { withRouter} from 'react-router-dom'
import io from 'socket.io-client'

class WaitingPrivate extends React.Component{
  constructor(props) {
    super(props);
    this.someoneJoined.bind(this);
    this.state = {
      players: []
    }
    this.socket = io('/')
    this.socket.on('connect', () => {
      console.log('listening to socket')
      this.socket.on('join-private-room', (data) => {
        this.someoneJoined(data)
      })
    })
  }

  someoneJoined(data){
    if (data.msg === 'success'){
      const { players } = this.state
      this.setState({
        players: [...players, data.name]
      })
    } else {
      console.log("Someone failed to join")
    }
  }

  render(){
    const { players } = this.state
    return(
      <>
        <div id="waitingPrivate">
          <div id="heading">
            <h1>{this.props.roomName}</h1>
            <h2 id="code">Room Code: {this.props.roomCode}</h2>
            <h2 id="time">Timer: </h2>
          </div>
          <div id="players">
            {players.map(p => (
              <h3 key={p}>Player Name: {p}</h3>
            ))}
          </div>
          <Button variant="primary" type="submit">Start the Game!</Button>
        </div>
      </>
    )
  }
}

export default withRouter(WaitingPrivate)