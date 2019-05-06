import React from 'react';
import './waiting.css';
import {Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom'
import socket, { getPlayers } from '../../utils/api'

class WaitingPrivate extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      players: []
    }
    this.receivedPlayers.bind(this)
  }

  receivedPlayers(players = this.state.players){
    this.setState({players})
  }


  componentDidMount(){
    const { roomCode } = this.props
    getPlayers(roomCode, (players) => {
      this.receivedPlayers(players)
    })
    socket.on('join-private-room', ({ msg, players }) => {
      console.log(msg)
      console.log(players)
      if (msg === 'success') {
        this.receivedPlayers(players)
      }
    })
  }

  componentWillUnmount(){
    socket.off('join-private-room')
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