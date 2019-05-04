import React from 'react';
import { Modal, Button, Form, Nav } from 'react-bootstrap';

export class PublicModal extends React.Component {
    render() {
      return (
        <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Create a Public Room
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form style={{width: '100%'}}>
                <Form.Label>Room Name</Form.Label>
                <Form.Control placeholder="Enter a room name" />
                <Form.Label>Player Name</Form.Label>
                <Form.Control placeholder="Enter your player name" />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
            <Nav.Link href="/Game"><Button>Submit</Button></Nav.Link>
          </Modal.Footer>
        </Modal>
      );
    }
}
