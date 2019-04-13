import React from 'react';
import './create.css';
import { Nav, Form, Row, Col, Button, Jumbotron } from 'react-bootstrap';
import Header from "../../components/header";

const CreatePrivate = () => {
  return(
<>
  <div className="create">
    <Form>
      <h1> SAMPLE PRIVATE ROOM CODE</h1>
      <br />
      <Row>
        <Col>
          <Form.Control placeholder="Player 1 Slot Still Open" />
        </Col>
        <Col>
          <Form.Control placeholder="Player 2 Slot Still Open" />
        </Col>
      </Row>

      <br />
      <Row>
        <Col>
          <Form.Control placeholder="Player 2 Slot Still Open" />
        </Col>
        <Col>
          <Form.Control placeholder="Player 6 Slot Still Open" />
        </Col>
      </Row>

      <br />
      <Row>
        <Col>
          <Form.Control placeholder="Player 3 Slot Still Open" />
        </Col>
        <Col>
          <Form.Control placeholder="Player 7 Slot Still Open" />
        </Col>
      </Row>

      <br />
      <Row>
        <Col>
          <Form.Control placeholder="Player 4 Slot Still Open" />
        </Col>
        <Col>
          <Form.Control placeholder="Player 8 Slot Still Open" />
        </Col>
      </Row>

      <br/>
      <Button variant="primary" type="submit">
        Start the Game!
      </Button>
    </Form>
  </div>
</>

  )

}

export default CreatePrivate;
