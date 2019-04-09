import React from 'react';
import './App.css';
import logo from './logo.png';
import Home from './pages/home/home';
import About from './pages/about/about';
import Instructions from './pages/instructions/instructions';
// import GenButton from './components/Button';
// import Scoreboard from './components/Scoreboard';
import { Nav, Navbar, Button, Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/home"
import Header from "./components/header"
import join_room from "./components/join_room";
import CreateRoom from "./components/CreateRoom"

const App = () => (
  <>
    <div className="App">
//       <Navbar fixed="top" style={{backgroundColor: '#00649b'}} expand="lg">
//         <Navbar.Brand href="#home">
//           <img alt="quip logo" src={logo} width="85" height="44.25" className="d-inline-block align-top"/>
//         </Navbar.Brand>
//         {/* <Nav.Link href="#" style={{color:'white'}}>About</Nav.Link> */}
//         <Container className="justify-content-end">
//           <Row>
//             <Nav.Link href="#"><Col><Button variant="primary">Create a Room</Button></Col></Nav.Link>
//             <Nav.Link href="#"><Col><Button variant="success">Join a Room</Button></Col></Nav.Link>
//             <Nav.Link href="#"><Col><Button variant="danger">Add a Prompt</Button></Col></Nav.Link>
//           </Row>
//         </Container>
//       </Navbar>
      
      <Router>
        <div>
        <Route exact path="/" component={Home}/>
        <Route path = "/join_room" component={join_room}/>
        <Route path = "/CreateRoom" component={CreateRoom}/>
        </div>

      </Router>
      <Home />
      <About />
      <Instructions />
  </div>
</>
)

export default App;
