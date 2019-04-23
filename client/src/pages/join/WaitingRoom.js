import React from 'react';
import './add.css';
import { Form, Button, Nav, Row, Col } from 'react-bootstrap';
import CreatePublic from "../../create/CreatePublic";
import CreatePrivate from "../../create/CreatePrivate";

function wRoom(publicR, privateR) {
  if (publicR !== null && privateR === null) {
    this.state = "public";
  } else {
    this.state = "private";
  }
}

const room = new wRoom(CreatePublic, CreatePrivate);
const state = room.state;

export default class WaitingRoom extends React.Component {
    render() {
      if (state === "public") {
        return(
            <>
                <div id="publicWait">
                    <h1>Public Waiting Room</h1>
                    <p> ROOM CODE
                    </p>
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
                    </Form> */
                    <br></br>
                    <Nav.Link href="/"><Button variant="primary" type="submit">Start the Game!</Button></Nav.Link>
                </div>
            </>
        )
      } else {
        return(
            <>
                <div id="privateWait">
                    <h1>Private Waiting Room</h1>
                    <p> Wait for people to join your game!
                    </p>
                    <Form>
                      <div className="GridSpacing">
                        <Row>
                          <Col>
                            <Form.Control placeholder="Your Name" />
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
                    </Form> */
                    <br></br>
                    <Nav.Link href="/"><Button variant="primary" type="submit">Start the Game!</Button></Nav.Link>
                </div>
            </>
        )
      }

    }
}
