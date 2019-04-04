import React from 'react';
import './App.css';
import logo from './logo.png';
import { Nav, Navbar, Button, Container, Row, Col } from 'react-bootstrap';
import Header from "./header";


const join_room = () => {
  return(
<>
<Header/>

<div className="join_room">
  <h1>Join Room</h1>
  <div className = "room_container"> Rooms go in here </div>
</div>



</>

  )

}

export default join_room;
