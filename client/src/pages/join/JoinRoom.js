import React from 'react';
import './join.css';
import { Table, Button } from 'react-bootstrap';
import Header from "../../components/header";


const JoinRoom = () => {
  return(
    <>
      <Header/>

      <div className="joinRoom">
        <h1>Join a Public Room</h1>
        <div className = "room_container">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Room Number</th>
                <th>Room Name</th>
                <th>Space</th>
                <th>Join</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Can't Beat Me</td>
                <td>5/8</td>
                <td><Button variant="warning">Join Room</Button></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jelly belly</td>
                <td>3/8</td>
                <td><Button variant="warning">Join Room</Button></td>
              </tr>
              <tr>
                <td>3</td>
                <td>I love cheesecake</td>
                <td>1/8</td>
                <td><Button variant="warning">Join Room</Button></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Hi</td>
                <td>4/8</td>
                <td><Button variant="warning">Join Room</Button></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>

    </>

  )

}

export default JoinRoom;
