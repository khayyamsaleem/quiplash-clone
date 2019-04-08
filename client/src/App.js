import React from 'react';
import './App.css';
import logo from './logo.png';
// import GenButton from './components/Button';
// import Scoreboard from './components/Scoreboard';
import { Nav, Navbar, Button, Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/home"
import Header from "./components/header"
import join_room from "./components/join_room";
import CreateRoom from "./components/CreateRoom"

const App = () => (
<Router>
  <div>
  <Route exact path="/" component={Home}/>
  <Route path = "/join_room" component={join_room}/>
  <Route path = "/CreateRoom" component={CreateRoom}/>
  </div>

</Router>

)

export default App;
