import React from 'react';
import './waiting.css';
import {Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom'
import socket from '../../utils/api'

class WaitingPrivate extends React.Component{
  constructor(props) {
    super(props);
    // this.someoneJoined.bind(this);
    this.state = {
      players: []
    }
    socket.on('join-private-room', (data) => {
      console.log("SOMEONE CONNECTED TO JOIN PRIVATE ROOM VIA SOCKET")
      // this.someoneJoined(data)
      console.log("THE DATA...IN FUNCTION...", data)
      if (data.msg === 'success'){
        this.setState({
          players: data.names
        })
        console.log("CURRENT PLAYERS: ", this.state.players);
      } else {
        console.log("Someone failed to join")
      }
    })
  }

  // componentWillMount(){
  //   this.setState({players:[]})
  // }
  // someoneJoined(data){
  //   console.log("THE DATA...IN FUNCTION...", data)
  //   if (data.msg === 'success'){
  //     this.setState({
  //       players: data.names
  //     })
  //     console.log("CURRENT PLAYERS: ", this.state.players);
  //   } else {
  //     console.log("Someone failed to join")
  //   }
  // }

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