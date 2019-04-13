import React from 'react';
import './App.css';
import logo from './logo.png';
import Home from './pages/home/home';
// import GenButton from './components/Button';
// import Scoreboard from './components/Scoreboard';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/header";
import JoinRoom from "./pages/join/JoinRoom";
import CreatePublic from "./pages/create/CreatePublic";

const App = () => (
  <>
    <div className="App">
      <Header/>
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path = "/CreatePublic" component={CreatePublic}/>
          {/* <Route path = "/CreatePrivate" component={CreatePrivate}/> */}
          <Route path = "/JoinRoom" component={JoinRoom}/>
          {/* <Route path = "/AddPrompt" component={AddPrompt} /> */}
        </div>

      </Router>
  </div>
</>
)

export default App;
