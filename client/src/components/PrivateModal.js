import React from 'react';
import { Modal, Button, Form, Nav } from 'react-bootstrap';
import WaitingPrivate from './../pages/waiting/waitingPrivate';
import io from 'socket.io-client';

export class PrivateModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      roomCode: 0,
      roomName: "",
      playerName: ""
    };

    let socket=io.connect('http://localhost:8080');
    socket.on('connection',() => {
      socket.emit('create-private-room', (message) => {
        this.setState({roomCode: message});
      })
    })

    // socket.disconnect();
    
  }
  //STORES ROOM NAME AND PLAYER NAME IN STATE
  handleRoomChange(e){
    this.setState({roomName: e.target.value});
  }
  handleNameChange(e){
    this.setState({playerName: e.target.value});
  }
  submitForm () {
    console.log("ROOM NAME: " + this.state.roomName);
    console.log("PLAYER NAME: " + this.state.playerName);
  }
  
  render() {
    return (
      this.state.roomCode !== 0 
      ? <WaitingPrivate roomCode={this.state.roomCode} socket={this.socket} roomName = {this.state.roomName}/>
      : <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Create a Private Room</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form style={{width: '100%'}}>
            <Form.Label>Room Name</Form.Label>
            <Form.Control placeholder="Enter a room name" onChange={this.handleRoomChange.bind(this)}/>
            <Form.Label>Player Name</Form.Label>
            <Form.Control placeholder="Enter your player name" onChange={this.handleNameChange.bind(this)}/>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
          <Button onClick={this.submitForm.bind(this)}>Submit</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
