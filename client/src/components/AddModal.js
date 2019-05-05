import React from 'react';
import { Modal, Form, Button, Nav } from 'react-bootstrap';
import axios from "axios";

let Filter = require('bad-words');


export class AddModal extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      message: '',
    }


}


    textChange(e) {
      let message = this.state.message;
      console.log(message);

    }

    handleSubmit(e){
      console.log(this.state.message);
      let prompt = this.state.message;
      let filter = new Filter();
      prompt = filter.clean(prompt);
      console.log(prompt);


    }













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
            <Form style={{width: '100%'}} onChange = {e => this.setState({ message : e.target.value })}>
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
            <Button onClick={this.handleSubmit.bind(this)}>Submit</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}
