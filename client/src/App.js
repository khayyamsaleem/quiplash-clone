import React from 'react';
import './App.css';
// import logo from './logo.png';
import Home from './pages/home/home';
// import GenButton from './components/Button';
// import Scoreboard from './components/Scoreboard';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import JoinRoom from "./pages/join/JoinRoom";
import Error from "./pages/error/Error";
import Game from "./pages/games/Game";

const App = () => (
  <>
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path = "/JoinRoom" component={JoinRoom}/>
          <Route path = "/Game" component={Game} />
          <Route component={Error}/>
        </Switch>
      </Router>
  </div>
</>
)

export default App;
