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
import NavBar from "./components/NavBar"
import join_room from "./components/join_room";
import CreateRoom from "./components/CreateRoom"

const App = () => (
  <>
    <div className="App">
      <NavBar/>
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
