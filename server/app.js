const mongoose = require('mongoose');
const cors = require('cors');
const express = require("express");
const app = express();

//check for prod env later
require('dotenv').config();

const env = (process.env.NODE_ENV).toUpperCase();
const dbURL = process.env['DB_URL_' + env];

const promptRoutes = require('./routes/prompts');

const port = 3000;

//connect to mongo db
mongoose.connect(dbURL, {useNewUrlParser: true});

//middlewares
app.use(cors({
   credentials: true,
   origin: true
}));

//routes
app.use('/prompt', promptRoutes);


app.get('/', (req, res) => {
    res.json({
        success: true,
        message: "server running"
    })
})

//anything else 
app.get('*', (req, res) => {
    res.status(400).josn({ message: 'BAD REQUEST' });
});

app.listen(port, () => console.log(`server running on port ${port}!`));

//for testing
module.exports = app;
