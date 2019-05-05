import React from 'react';
import { Modal, Button, Form, Nav } from 'react-bootstrap';

import io from 'socket.io-client'


export class PrivateModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      roomcode: '0000',
      name: '',
    }



  }

    handlesubmit(e){
      e.preventDefault()
      this.socket.emit('create-private-room');
      console.log('this is happening');
    }











    render() {
      return (
        <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered
        socket={this.socket}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Create a Private Room</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form style={{width: '100%'}}>
                <Form.Label>Room Name</Form.Label>
                <Form.Control placeholder="Enter a room name" />
                <Form.Label>User Name</Form.Label>
                <Form.Control placeholder="Enter your game name" />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
            <Button onClick={this.handlesubmit.bind(this)}>Submit</Button>
          </Modal.Footer>
        </Modal>
      );
    }

}
