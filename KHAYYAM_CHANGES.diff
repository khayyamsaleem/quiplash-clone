
diff --git a/client/package.json b/client/package.json
index 76b1d6d..33c0935 100644
--- a/client/package.json
+++ b/client/package.json
@@ -25,7 +25,6 @@
   "eslintConfig": {
     "extends": "react-app"
   },
-  "proxy": "http://localhost:1337",
   "browserslist": [
     ">0.2%",
     "not dead",
diff --git a/client/src/App.js b/client/src/App.js
index 8c5a58e..5828b00 100644
--- a/client/src/App.js
+++ b/client/src/App.js
@@ -1,4 +1,4 @@
-import React, {Component} from 'react';
+import React from 'react';
 import './App.css';
 import Home from './pages/home/home';
 import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
diff --git a/client/src/components/AddModal.js b/client/src/components/AddModal.js
index 61ba2dd..785115b 100644
--- a/client/src/components/AddModal.js
+++ b/client/src/components/AddModal.js
@@ -1,25 +1,20 @@
-import React from 'react';
-import { Modal, Form, Button, Nav } from 'react-bootstrap';
-import axios from "axios";
-import io from 'socket.io-client'
-
-let Filter = require('bad-words');
+import React from "react";
+import { Modal, Form, Button } from "react-bootstrap";
+import { addPrompt } from "../utils/api";
 
+let Filter = require("bad-words");
 
 export class AddModal extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
-      message: '',
-      clean: true,
-    }
-
-    this.socket = io('http://localhost:8000/');
+      message: "",
+      clean: true
+    };
   }
 
-
   textChange(e) {
-      this.setState({ message : e.target.value })
+    this.setState({ message: e.target.value });
     let filter = new Filter();
     let prompt = this.state.message;
     if (filter.isProfane(prompt)) {
@@ -28,53 +23,49 @@ export class AddModal extends React.Component{
     } else {
       this.setState({ clean: true });
     }
-
   }
 
   handleSubmit(e) {
-      console.log(this.state.message);
-      let prompt = this.state.message;
+    const { message, clean } = this.state;
     let filter = new Filter();
-      prompt = filter.clean(prompt);
-      console.log(prompt);
-
-      if(this.state.clean){
-        this.socket.emit('add-prompt', {prompt: this.state.message});
 
+    if (clean) {
+      addPrompt(filter.clean(message))
     }
-
-
   }
 
-
-
-
-
-
-
-
-
-
-
-
-
   render() {
     return (
       <>
-        <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
+        <Modal
+          {...this.props}
+          size="lg"
+          aria-labelledby="contained-modal-title-vcenter"
+          centered
+        >
           <Modal.Header closeButton>
             <Modal.Title id="contained-modal-title-vcenter">
               Add a Prompt
             </Modal.Title>
           </Modal.Header>
           <Modal.Body>
-            <Form style={{width: '100%'}} onChange = {this.textChange.bind(this)}>
-                <Form.Label>Wanna see your own prompts featured in a game? Add a prompt here,
-            and we'll vet it and add it to the game! You never know, maybe you'll
-            even see it in your own game!</Form.Label>
+            <Form
+              style={{ width: "100%" }}
+              onChange={this.textChange.bind(this)}
+            >
+              <Form.Label>
+                Wanna see your own prompts featured in a game? Add a prompt
+                here, and we'll vet it and add it to the game! You never know,
+                maybe you'll even see it in your own game!
+              </Form.Label>
               <Form.Control placeholder="Fill prompt here..." />
               <Form.Text className="text-muted">
-                  <h3> {this.state.clean ? ' ': 'Bad words in prompt may not be saved'} </h3>
+                <h3>
+                  {" "}
+                  {this.state.clean
+                    ? " "
+                    : "Bad words in prompt may not be saved"}{" "}
+                </h3>
                 Make your prompt fun and original!
               </Form.Text>
             </Form>
@@ -82,10 +73,9 @@ export class AddModal extends React.Component{
           <Modal.Footer>
             <Button onClick={this.props.onHide}>Close</Button>
             <Button onClick={this.handleSubmit.bind(this)}>Submit</Button>
-
           </Modal.Footer>
         </Modal>
       </>
-    )
+    );
   }
 }
diff --git a/client/src/pages/games/Game.js b/client/src/pages/games/Game.js
index 3ea29f0..03faefb 100644
--- a/client/src/pages/games/Game.js
+++ b/client/src/pages/games/Game.js
@@ -1,50 +1,34 @@
-import React from 'react';
-import './game.css';
-import { Nav, Row, Col, Button, Jumbotron } from 'react-bootstrap';
+import React from "react";
+import "./game.css";
+import { Nav, Row, Col, Button, Jumbotron } from "react-bootstrap";
 import Header from "../../components/header";
 
 const Game = () => {
-
-
-
-
   return (
     <>
       <div className="create">
         <Header />
         <Jumbotron>
           <h1>Round #</h1>
-    <p>
-      SAMPLE PROMPT HERE
-    </p>
+          <p>SAMPLE PROMPT HERE</p>
         </Jumbotron>
         <Row>
           <Col>
             {/* we need to figure out how to hold button animation until all
         user votes go through or time runs out */}
-      <Nav.Link href="#"><Button variant="light">QUIP 1 HERE </Button></Nav.Link>
+            <Nav.Link href="#">
+              <Button variant="light">QUIP 1 HERE </Button>
+            </Nav.Link>
           </Col>
           <Col>
-      <Nav.Link href="#"><Button variant="dark">QUIP 2 HERE</Button></Nav.Link>
+            <Nav.Link href="#">
+              <Button variant="dark">QUIP 2 HERE</Button>
+            </Nav.Link>
           </Col>
         </Row>
       </div>
     </>
-
-  )
-
-}
-
-class Player{
-  constructor(name){
-    this.name = name;
-    this.score = 0;
-  }
-
-  setScore(number){
-    this.score = number;
-  }
-  
-}
+  );
+};
 
 export default Game;
diff --git a/client/src/pages/home/home.js b/client/src/pages/home/home.js
index abfc673..7fc3e4d 100644
--- a/client/src/pages/home/home.js
+++ b/client/src/pages/home/home.js
@@ -1,34 +1,34 @@
-import React, {Component} from 'react';
-import './home.css';
-import About from '../about/about';
-import Arrow from '../../components/Arrow/Arrow';
-import { Form, Button } from 'react-bootstrap';
+import React from "react";
+import "./home.css";
+import About from "../about/about";
+import Arrow from "../../components/Arrow/Arrow";
+import { Form, Button } from "react-bootstrap";
 import { Link } from "react-scroll";
-import { joinPrivateRoom } from '../../utils/api';
-import { withRouter } from 'react-router-dom';
+import { joinPrivateRoom } from "../../utils/api";
+import { withRouter } from "react-router-dom";
 
 class Home extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       roomCode: undefined,
-            playerName: "",
-        }
+      playerName: ""
+    };
   }
 
   joinGame() {
-        const { roomCode, playerName } = this.state
-        joinPrivateRoom(roomCode, playerName, (res) => {
-            const { roomName, msg } = res
-            if (msg === 'success') {
+    const { roomCode, playerName } = this.state;
+    joinPrivateRoom(roomCode, playerName, res => {
+      const { roomName, msg } = res;
+      if (msg === "success") {
         this.props.history.push({
-                    pathname: '/waiting/private',
+          pathname: "/waiting/private",
           state: {
             roomCode,
             playerName,
             roomName
           }
-                })
+        });
       }
     });
   }
@@ -40,16 +40,32 @@ class Home extends React.Component {
           <h1 id="title">Quip Thinking</h1>
           <h4 id="byline">the online game of witty lines</h4>
           <Form>
-                        <Form.Control style={{ margin: '10px 0' }} onChange={(e) => this.setState({ roomCode: e.target.value })} placeholder="Enter room code" />
-                        <Form.Control style={{ margin: '10px 0' }} onChange={(e) => this.setState({ playerName: e.target.value })} placeholder="Enter your player name" />
-                        <Button style={{ margin: '10px 0' }} onClick={this.joinGame.bind(this)} variant="primary">Submit</Button>
+            <Form.Control
+              style={{ margin: "10px 0" }}
+              onChange={e => this.setState({ roomCode: e.target.value })}
+              placeholder="Enter room code"
+            />
+            <Form.Control
+              style={{ margin: "10px 0" }}
+              onChange={e => this.setState({ playerName: e.target.value })}
+              placeholder="Enter your player name"
+            />
+            <Button
+              style={{ margin: "10px 0" }}
+              onClick={this.joinGame.bind(this)}
+              variant="primary"
+            >
+              Submit
+            </Button>
           </Form>
         </div>
-                <Link to="about" smooth={true}><Arrow /></Link>
+        <Link to="about" smooth={true}>
+          <Arrow />
+        </Link>
         <About id="about" />
       </>
-        )
+    );
   }
 }
 
-export default withRouter(Home)
+export default withRouter(Home);
diff --git a/client/src/pages/waiting/waitingPrivate.js b/client/src/pages/waiting/waitingPrivate.js
index db2961d..8c16c3d 100644
--- a/client/src/pages/waiting/waitingPrivate.js
+++ b/client/src/pages/waiting/waitingPrivate.js
@@ -2,44 +2,39 @@ import React from 'react';
 import './waiting.css';
 import {Button} from 'react-bootstrap';
 import {withRouter} from 'react-router-dom'
-import socket from '../../utils/api'
+import socket, { getPlayers } from '../../utils/api'
 
 class WaitingPrivate extends React.Component{
   constructor(props) {
     super(props);
-    // this.someoneJoined.bind(this);
     this.state = {
       players: []
     }
-    socket.on('join-private-room', (data) => {
-      console.log("SOMEONE CONNECTED TO JOIN PRIVATE ROOM VIA SOCKET")
-      // this.someoneJoined(data)
-      console.log("THE DATA...IN FUNCTION...", data)
-      if (data.msg === 'success'){
-        this.setState({
-          players: data.names
+    this.receivedPlayers.bind(this)
+  }
+
+  receivedPlayers(players = this.state.players){
+    this.setState({players})
+  }
+
+
+  componentDidMount(){
+    const { roomCode } = this.props
+    getPlayers(roomCode, (players) => {
+      this.receivedPlayers(players)
     })
-        console.log("CURRENT PLAYERS: ", this.state.players);
-      } else {
-        console.log("Someone failed to join")
+    socket.on('join-private-room', ({ msg, players }) => {
+      console.log(msg)
+      console.log(players)
+      if (msg === 'success') {
+        this.receivedPlayers(players)
       }
     })
   }
 
-  // componentWillMount(){
-  //   this.setState({players:[]})
-  // }
-  // someoneJoined(data){
-  //   console.log("THE DATA...IN FUNCTION...", data)
-  //   if (data.msg === 'success'){
-  //     this.setState({
-  //       players: data.names
-  //     })
-  //     console.log("CURRENT PLAYERS: ", this.state.players);
-  //   } else {
-  //     console.log("Someone failed to join")
-  //   }
-  // }
+  componentWillUnmount(){
+    socket.off('join-private-room')
+  }
 
   render(){
     const { players } = this.state
diff --git a/client/src/utils/api.js b/client/src/utils/api.js
index a45208c..9d5fefc 100644
--- a/client/src/utils/api.js
+++ b/client/src/utils/api.js
@@ -1,7 +1,9 @@
 import io from 'socket.io-client'
+const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:1337'
 
-const socket = io('/')
-export const createPrivateRoom = (roomName, playerName, cb) => {
+const socket = io(API_URL)
+
+export const createPrivateRoom = (roomName, playerName, cb = () => {}) => {
     socket.emit('create-private-room', {
         playerName,
         roomName
@@ -11,11 +13,22 @@ export const createPrivateRoom = (roomName, playerName, cb) => {
     })
 }
 
-export const joinPrivateRoom = (roomCode, playerName, cb) => {
+export const joinPrivateRoom = (roomCode, playerName, cb = () => {}) => {
     socket.emit('join-private-room', {code: roomCode, name: playerName})
     socket.on('join-private-room', output => {
         cb(output)
     })
 }
 
+export const addPrompt = (prompt, cb = () => {}) => {
+    socket.emit('add-prompt', { prompt })
+}
+
+export const getPlayers = (roomCode, cb = () => {}) => {
+    socket.emit('get-players', { roomCode })
+    socket.on('get-players', ({ players }) => {
+        cb(players)
+    })
+}
+
 export default socket
diff --git a/server/package.json b/server/package.json
index 58762c5..35da41c 100644
--- a/server/package.json
+++ b/server/package.json
@@ -4,7 +4,7 @@
   "description": "",
   "main": "server.js",
   "scripts": {
-    "start": "cross-env NODE_ENV=dev node app.js",
+    "start": "cross-env NODE_ENV=dev node server.js",
     "sock": "cross-env NODE_ENV=dev node server.js",
     "sockTest": "cross-env NODE_ENV=test mocha --timeout 15000 tests/socket-tests.js",
     "start:dev": "nodemon",
diff --git a/server/socket-utils/socket-utils.js b/server/socket-utils/socket-utils.js
index 7caf474..eada778 100644
--- a/server/socket-utils/socket-utils.js
+++ b/server/socket-utils/socket-utils.js
@@ -82,9 +82,9 @@ function getPairs(players, round) {
 getPrompts(4, 5);
 console.log(getPairs(['p1', 'p2', 'p3'], 3)); */
 
-console.log(getPairs(['p1', 'p2', 'p3'], 1)); 
-console.log(getPairs(['p1', 'p2', 'p3'], 2)); 
-console.log(getPairs(['p1', 'p2', 'p3'], 3)); 
+// console.log(getPairs(['p1', 'p2', 'p3'], 1)); 
+// console.log(getPairs(['p1', 'p2', 'p3'], 2)); 
+// console.log(getPairs(['p1', 'p2', 'p3'], 3)); 
 
 //getRandomPrompts(5);
 //console.log(getRandomPrompts(5));
diff --git a/server/socket/socket-config.js b/server/socket/socket-config.js
index ec0f1e0..b2bbb44 100644
--- a/server/socket/socket-config.js
+++ b/server/socket/socket-config.js
@@ -1,19 +1,18 @@
-const Game = require('../custom-classes/game.js');
-const mongoose = require('mongoose');
-const Prompt = require('./../models/prompts');
-const config = require('./../config/default');
+const Game = require("../custom-classes/game.js");
+const mongoose = require("mongoose");
+const Prompt = require("./../models/prompts");
+const config = require("./../config/default");
 
-require('dotenv').config();
+require("dotenv").config();
 //const env = (process.env.NODE_ENV).toUpperCase();
 
-const dbURL = config.dbURL || process.env['DB_URL_' + env];
+const dbURL = config.dbURL || process.env["DB_URL_" + env];
 
 mongoose.connect(dbURL, { useNewUrlParser: true });
 
-const util = require('../socket-utils/socket-utils.js');
+const util = require("../socket-utils/socket-utils.js");
 
 module.exports = function(io) {
-
   const currentPrivateRooms = {};
   const min = 3;
   var rounds = 3;
@@ -22,72 +21,85 @@ module.exports = function (io) {
   // code: { Game }
 
   //io function
-	io.on('connection', socket => {
-
+  io.on("connection", socket => {
     //create private room and recieve a code
-		socket.on('create-private-room', function (msg) {
-			console.log(`${socket.id} is creating a room`)
+    socket.on("create-private-room", function(msg, cb = () => {}) {
+      console.log(`${socket.id} is creating a room`);
       //generate random number, can abstract this out so upper and lower bound are passed or are in env file
-			const rand = Math.floor((Math.random() * 8000) + 7000);
+      const rand = Math.floor(Math.random() * 8000 + 7000);
 
       const game = new Game(rand);
-			game.roomName = msg.roomName
-			game.addPlayer(socket.id, msg.playerName)
+      game.roomName = msg.roomName;
+      game.addPlayer(socket.id, msg.playerName);
       currentPrivateRooms[rand] = game;
 
-			io.to(socket.id).emit('create-private-room', {
+      io.to(socket.id).emit("create-private-room", {
         roomCode: rand,
         roomName: game.roomName
-			})
-      			cb(null, 'Done');
+      });
+      cb(null, "Done");
     });
 
     //TODO: verify code to join private room
-		socket.on('join-private-room', function (msg, cb) {
-			console.log(`${socket.id} is joining a room`)
+    socket.on("join-private-room", function(msg, cb) {
+      console.log(`${socket.id} is joining a room`);
       cb = cb || function() {};
       // msg.code is room code
       // msg.name is players name
       if (msg.code) {
-				let roomCode = parseInt(msg.code)
+        let roomCode = parseInt(msg.code);
         if (currentPrivateRooms.hasOwnProperty(roomCode)) {
           // if game exists add user
-					if ((currentPrivateRooms[roomCode]).addPlayer(socket.id, msg.name)) {
-						io.to(socket.id).emit('join-private-room', { msg: 'success', names: ['cheese'], roomName: currentPrivateRooms[roomCode].roomName});
+          if (currentPrivateRooms[roomCode].addPlayer(socket.id, msg.name)) {
+            socket.emit("join-private-room", {
+              msg: "success",
+              players: Object.values(currentPrivateRooms[roomCode].players).map(p => p.name),
+              roomName: currentPrivateRooms[roomCode].roomName
+            });
           } else {
-						io.to(socket.id).emit('join-private-room', { msg: 'room full' });
+            io.to(socket.id).emit("join-private-room", { msg: "room full" });
           }
         }
       } else {
-				io.to(socket.id).emit('join-private-room', { msg: 'code invalid', name:''});
+        io.to(socket.id).emit("join-private-room", {
+          msg: "code invalid",
+        });
       }
 
-			cb(null, 'Done');
+      cb(null, "Done");
     });
 
+    socket.on("get-players", (msg, cb = () => {}) => {
+      const { roomCode } = msg;
+      const names = Object.values(currentPrivateRooms[roomCode].players).map(p => p.name)
+      io.to(socket.id).emit("get-players", {
+        players: names
+      })
+    })
 
-		socket.on('start-game', async function(msg, cb) {
+    socket.on("start-game", async function(msg, cb) {
       cb = cb || function() {};
 
       // check that the minimum threshold is met
       // msg.code is room code
       if (currentPrivateRooms.hasOwnProperty(msg.code)) {
         //check if the number of players is at least 3
-				const num = (currentPrivateRooms[msg.code]).getNumberofPlayers();
+        const num = currentPrivateRooms[msg.code].getNumberofPlayers();
 
         if (num >= min) {
           //get the keys, i.e socket id from all the players in the game
           //put them in an array called players
-					const currPlayers = Object.keys(currentPrivateRooms[msg.code].players);
+          const currPlayers = Object.keys(
+            currentPrivateRooms[msg.code].players
+          );
 
           //get the number of prompts needed from the database
           //const results = util.getRandomPrompts(num * rounds);
           const results = util.getRandom(num * rounds);
           //					const results = util.getPrompts(num, num*rounds);
-					console.log('Prompts ', results);
+          console.log("Prompts ", results);
 
           results.then(prompts => {
-
             //
             console.log("PROMPTS FROM RESULTS", prompts);
             //create a loop for each round and get the pairs for that round
@@ -96,27 +108,33 @@ module.exports = function (io) {
               const pairs = util.getPairs(currPlayers, r);
               console.log("PAIRS ", currPlayers, pairs);
 
-								const limit = (i * num) + num;
+              const limit = i * num + num;
               const start = i * num;
               //let k = 0;
               console.log("NUM", num);
               console.log("LIMIT and START", limit, start);
               for (let j = start, k = 0; j < limit; j++, k++) {
-									currentPrivateRooms[msg.code]['round_'+r] = {};
-									currentPrivateRooms[msg.code]['round_'+r][prompts[j]] = {};
+                currentPrivateRooms[msg.code]["round_" + r] = {};
+                currentPrivateRooms[msg.code]["round_" + r][prompts[j]] = {};
 
                 //initialize pairs on this prompt with empty quotes
 
-									
                 //		console.log(`IN RESULTS HERE IS PROMPT ${prompts[j]} at index ${j} ${currentPrivateRooms[msg.code]['round_'+r][prompts[j]]}\n`);
-									currentPrivateRooms[msg.code]['round_'+r][prompts[j]][pairs[k][0]] = '';
-									currentPrivateRooms[msg.code]['round_'+r][prompts[j]][pairs[k][1]] = '';
+                currentPrivateRooms[msg.code]["round_" + r][prompts[j]][
+                  pairs[k][0]
+                ] = "";
+                currentPrivateRooms[msg.code]["round_" + r][prompts[j]][
+                  pairs[k][1]
+                ] = "";
 
                 //		console.log(`PLAYER `, (currentPrivateRooms[msg.code].players[pairs[k][0]]));
-									(currentPrivateRooms[msg.code].players[pairs[k][0]]).addPrompt(prompts[j]);
-									(currentPrivateRooms[msg.code].players[pairs[k][1]]).addPrompt(prompts[j]);
+                currentPrivateRooms[msg.code].players[pairs[k][0]].addPrompt(
+                  prompts[j]
+                );
+                currentPrivateRooms[msg.code].players[pairs[k][1]].addPrompt(
+                  prompts[j]
+                );
               }
-
             }
 
             //assign each pair a prompt
@@ -126,30 +144,35 @@ module.exports = function (io) {
             //for each player, emit their prompts to repesctive client ids
 
             for (let i = 0; i < currPlayers.lenght; i++) {
-								const qs = (currentPrivateRooms[msg.code].players[currPlayers[i]]).getPrompts();
-								console.log("SENFING PROMPTS", qs);
-								io.to(currPlayers[i]).emit('start-game', { start: 'true', prompts: qs});
+              const qs = currentPrivateRooms[msg.code].players[
+                currPlayers[i]
+              ].getPrompts();
+              console.log("SENDING PROMPTS", qs);
+              io.to(currPlayers[i]).emit("start-game", {
+                start: "true",
+                prompts: qs
+              });
             }
           });
           //socket.emit('start-game', { start: 'true' });
         } else {
-					socket.emit('start-game', { start: 'false', prompts: null });
+          socket.emit("start-game", { start: "false", prompts: null });
         }
       } else {
-				socket.emit('start-game', { start: 'false', prompts: null});	
+        socket.emit("start-game", { start: "false", prompts: null });
       }
 
-			cb(null, 'Done');
+      cb(null, "Done");
     });
 
     //end game and room code will be removed
-		socket.on('game-over', function (msg, cb) {
+    socket.on("game-over", function(msg, cb) {
       cb = cb || function() {};
 
       if (currentPrivateRooms[msg]) {
         delete currentPrivateRooms[msg];
       }
-			socket.emit('game-over', "");
+      socket.emit("game-over", "");
       cb(null, "Done");
     });
 
@@ -158,33 +181,23 @@ module.exports = function (io) {
     //TODO; join a public room
 
     //on disconnect,
-		socket.on('disconnect', () => {
-		});
-
+    socket.on("disconnect", () => {});
 
-		socket.on('add-prompt', function(msg, cb) {
+    socket.on("add-prompt", function(msg, cb) {
       let prompt = msg.prompt;
       console.log(prompt);
 
       new Prompt({
         question: prompt
       }).save((err, promptt) => {
-	if(err) { /*failed to save, server error */
-		console.log("error")
-	} else { /* saved successfully */
-		console.log('success')
+        if (err) {
+          /*failed to save, server error */
+          console.log("error");
+        } else {
+          /* saved successfully */
+          console.log("success");
         }
       });
-
-
-
-
     });
-
-
   });
-
-
-
-
-}
+};
