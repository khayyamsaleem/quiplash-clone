import React from 'react';
import {Form, Button} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import io from 'socket.io-client';
import WaitingPrivate from './../waiting/waitingPrivate';
import './create.css';

class CreatePrivate extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      roomName: "",
      playerName: "",
    };
    
  }
  //STORES ROOM NAME AND PLAYER NAME IN STATE
  handleRoomChange(e){
    this.setState({roomName: e.target.value});
  }
  handleNameChange(e){
    this.setState({playerName: e.target.value});
  }
  submitForm () {
    const { roomName, playerName } = this.state
    const socket = io("/")
    socket.on('connect', () => {
      socket.emit('create-private-room', {
        playerName,
        roomName
      })
      console.log("sent event")
      socket.on('create-private-room', (roomCode) => {
        console.log("ROOM CODE", roomCode)
        this.props.history.push({
          pathname: '/waiting/private',
          state: {
            playerName,
            roomName,
            roomCode
          }
        })
      })
    })
  }

  render(){
    return(
      // this.state.readyToSubmit 
      // ? <WaitingPrivate roomCode={this.state.roomCode} socket={this.socket} roomName = {this.state.roomName} playerName = {this.state.playerName}/>
      // : <>
      <>
        <div className="create">
          <h1>Create a Private Room</h1>
          <Form style={{width: '100%'}}>
            <Form.Label>Room Name</Form.Label>
            <Form.Control placeholder="Enter a room name" onChange={this.handleRoomChange.bind(this)}/>
            <Form.Label>Player Name</Form.Label>
            <Form.Control placeholder="Enter your player name" onChange={this.handleNameChange.bind(this)}/>
          </Form>
          <br></br>
          <Button onClick={this.submitForm.bind(this)}>Submit</Button>
        </div>
        </>
    );
  }
}

export default withRouter(CreatePrivate)