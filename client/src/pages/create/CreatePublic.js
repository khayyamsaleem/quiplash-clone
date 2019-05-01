import React from 'react';
import './create.css';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Header from "../../components/header";

const CreateRoom = () => {
  return(
<>
  <div className="createPublic">
  <Header>
  <div className="create">
    <Form>
      <h1> Still Waiting on Players... </h1>
      <br />
      <Row>
        <Col>
          <Form.Control placeholder="You are Here" />
        </Col>
        <Col>
          <Form.Control placeholder="Player 5 Slot Still Open" />
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
  </Header>

  </div>
</>

  )

}

export default CreateRoom;
