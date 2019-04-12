import React from 'react';
import { Modal, Form, Button, Nav } from 'react-bootstrap';

export class AddModal extends React.Component{
  render(){
    return(
      <>
        <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Add a Prompt
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form style={{width: '100%'}}>
                <Form.Label>Wanna see your own prompts featured in a game? Add a prompt here,
            and we'll vet it and add it to the game! You never know, maybe you'll
            even see it in your own game!</Form.Label>
                <Form.Control placeholder="Fill prompt here..." />
                <Form.Text className="text-muted">
                    Make your prompt fun and original!
                </Form.Text>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
            <Nav.Link href="/Game"><Button>Submit</Button></Nav.Link>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}
