import React from 'react';
import './App.css';
import Home from './pages/home/home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import JoinRoom from "./pages/join/JoinRoom";
import CreatePrivate from "./pages/create/CreatePrivate";
import Error from "./pages/error/Error";
import Game from "./pages/games/Game";
import WaitingPrivate from './pages/waiting/waitingPrivate';

const App = () => (
  <>
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path = "/create/private" component = {CreatePrivate}/>
          <Route path = "/waiting/private" render={({
            location : {
              state : {
                roomName,
                playerName,
                roomCode
              }
            }
          }) => <WaitingPrivate
                  roomCode={roomCode}
                  roomName={roomName}
                  playerName={playerName}
                />}
          />
          <Route path = "/join/public" component={JoinRoom}/>
          <Route path = "/Game" component={Game} />
          <Route component={Error}/>
        </Switch>
      </Router>
  </div>
</>
)

export default App;
