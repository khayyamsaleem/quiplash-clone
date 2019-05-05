const mongoose = require('mongoose');
const express = require("express");
const app = express();

//socket req
const server = require('http').Server(app);
const io = require('socket.io')(server);
const ioUtil = require('./socket/socket-config.js');

//check for prod env later
require('dotenv').config();

const env = (process.env.NODE_ENV).toUpperCase();
const dbURL = process.env['DB_URL_' + env];

const promptRoutes = require('./routes/prompts');

const port = process.env['PORT_' + env] || 8080;

//connect to mongo db
mongoose.connect("mongodb://localhost:8888/quip", {useNewUrlParser: true});


//middlewares

//const currentPrivateRooms = new Array();

//socket functions
ioUtil(io);

//anything else 

//TODO: add index file in routes

app.get('*', (req, res) => {
    res.status(400).json({ message: 'BAD REQUEST' });
});

server.listen(port, () => console.log(`server running on port ${port}!`)); 

//for testing
module.exports = server;
