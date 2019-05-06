const mongoose = require('mongoose');
const express = require("express");
const bodyParser = require('body-parser')
const app = express();

//socket req
const server = require('http').Server(app);
const io = require('socket.io')(server);

//check for prod env later
require('dotenv').config();
const env = (process.env.NODE_ENV).toUpperCase();
const dbURL = process.env['DB_URL_' + env];

const promptRoutes = require('./routes/prompts');

const port = process.env['PORT_' + env] || 8080;

//connect to mongo db
mongoose.connect(dbURL, {useNewUrlParser: true}, (err) => {
    if (!err) {
        console.log("Connected to DB successfully!")

    } else {
        console.log("Failed to connected to DB")
    }
});

const ioUtil = require('./socket/socket-config.js');

//middlewares
app.use(bodyParser.json())

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
