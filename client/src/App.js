import React from 'react';
import './App.css';
// import logo from './logo.png';
import Home from './pages/home/home';
// import GenButton from './components/Button';
// import Scoreboard from './components/Scoreboard';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";
import JoinRoom from "./pages/join/JoinRoom";
import CreatePublic from "./pages/create/CreatePublic";
import Error from "./pages/error/Error";

const App = () => (
  <>
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path = "/JoinRoom" component={JoinRoom}/>
          <Route component={Error}/>
          {/* <Route path = "/AddPrompt" component={AddPrompt} /> */}
        </Switch>

      </Router>
  </div>
</>
)

export default App;
