const express = require("express");
const app = express();

// const path = require("path");
// const publicPath = path.resolve(__dirname, "public");

// const bodyParser = require("body-parser");

const port = 3000;

// app.use(express.static(publicPath));

// app.set("view engine", "hbs");

// app.use(function(req, res) {
// 	console.log(req.method, req.path);
// });

app.get("/", function(req, res) {
	res.send("hi this is a test");
});

app.listen(port, () => console.log(`node server running on port ${port}!`));