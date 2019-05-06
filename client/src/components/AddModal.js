import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { addPrompt } from "../utils/api";

let Filter = require("bad-words");

export class AddModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      clean: true
    };
  }

  textChange(e) {
    this.setState({ message: e.target.value });
    let filter = new Filter();
    let prompt = this.state.message;
    if (filter.isProfane(prompt)) {
      console.log("There are curse words in the prompt");
      this.setState({ clean: false });
    } else {
      this.setState({ clean: true });
    }
  }

  handleSubmit(e) {
    const { message, clean } = this.state;
    let filter = new Filter();

    if (clean) {
      addPrompt(filter.clean(message))
    }
  }

  render() {
    return (
      <>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add a Prompt
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              style={{ width: "100%" }}
              onChange={this.textChange.bind(this)}
            >
              <Form.Label>
                Wanna see your own prompts featured in a game? Add a prompt
                here, and we'll vet it and add it to the game! You never know,
                maybe you'll even see it in your own game!
              </Form.Label>
              <Form.Control placeholder="Fill prompt here..." />
              <Form.Text className="text-muted">
                <h3>
                  {" "}
                  {this.state.clean
                    ? " "
                    : "Bad words in prompt may not be saved"}{" "}
                </h3>
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
    );
  }
}
