const express = require("express");
const app = express();

const path = require("path");
const publicPath = path.resolve(__dirname, "public");

const bodyParser = require("body-parser");

app.use(express.static(publicPath));

app.set("view engine", "hbs");

app.use(function(req, res) {
	console.log(req.method, req.path);
});

app.get("/", function(req, res) {
	res.render("home", {});
});

app.post("/add", function(req, res) {
	art.push(req.body);

	res.redirect("/");
});

app.listen(3000, "127.0.0.1");
console.log("node server running on port 3000");