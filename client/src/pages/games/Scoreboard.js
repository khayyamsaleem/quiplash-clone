import React from 'react';
import './create.css';
import { Form, Row, Col } from 'react-bootstrap';
import Header from "../../components/header";

const CreatePrivate = () => {
  return(
<><Header>
  <div className="create">
    <Form>
      <h1> SAMPLE PRIVATE ROOM CODE</h1>
      <br />
      <Row>
        <Col>
          <Form.Control placeholder="1st Place" />
          <p> Sample Score </p>
        </Col>
        <Col>
          <Form.Control placeholder="2nd Place" />
          <p> Sample Score </p>
        </Col>
      </Row>

      <br />
      <Row>
        <Col>
          <Form.Control placeholder="3rd Place" />
          <p> Sample Score </p>
        </Col>
        <Col>
          <Form.Control placeholder="4th Place" />
          <p> Sample Score </p>
        </Col>
      </Row>

      <br />
      <Row>
        <Col>
          <Form.Control placeholder="5th Place" />
          <p> Sample Score </p>
        </Col>
        <Col>
          <Form.Control placeholder="6th Place" />
          <p> Sample Score </p>
        </Col>
      </Row>

      <br />
      <Row>
        <Col>
          <Form.Control placeholder="7th Place" />
          <p> Sample Score </p>
        </Col>
        <Col>
          <Form.Control placeholder="8th Place" />
          <p> Sample Score </p>
        </Col>
      </Row>
    </Form>
  </div>
  </Header>
</>

  )

}

export default CreatePrivate;
