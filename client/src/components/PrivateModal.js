import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export class PrivateModal extends React.Component {
    render() {
      return (
        <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Create a Private Room</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Label>Room Name</Form.Label>
                <Form.Control placeholder="Enter a room name" />
                <Form.Text className="text-muted">
                    Make your room fun and original!
                </Form.Text>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
            <Button>Submit</Button>
          </Modal.Footer>
        </Modal>
      );
    }
}