import React from 'react';
import '../App.css';
import { Form, Row, Col, Button } from 'react-bootstrap';
import NavBar from "./NavBar";

const CreateRoom = () => {
  return(
<>
  <div className="join_room">
  <NavBar/>
  <h1>Enter Player Names Below: </h1>
  <Form>
    <div className="GridSpacing">
      <Row>
        <Col>
          <Form.Control placeholder="Player 1" />
        </Col>
        <Col>
          <Form.Control placeholder="Player 5" />
        </Col>
      </Row>
    </div>

    <div className="GridSpacing">
    <Row>
      <Col>
        <Form.Control placeholder="Player 2" />
      </Col>
      <Col>
        <Form.Control placeholder="Player 6" />
      </Col>
    </Row>
    </div>

    <div className="GridSpacing">
    <Row>
      <Col>
        <Form.Control placeholder="Player 3" />
      </Col>
      <Col>
        <Form.Control placeholder="Player 7" />
      </Col>
    </Row>
    </div>

    <div className="GridSpacing">
    <Row>
      <Col>
        <Form.Control placeholder="Player 4" />
      </Col>
      <Col>
        <Form.Control placeholder="Player 8" />
      </Col>
    </Row>
    </div>
    <br/>
    <Button variant="primary" type="submit">
      Start the Game!
    </Button>
  </Form>

  </div>
</>

  )

}

export default CreateRoom;
