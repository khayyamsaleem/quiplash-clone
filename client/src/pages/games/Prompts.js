const mongoose = require("mongoose");

let uri = process.env.MONGODB_URI || "mongodb://localhost/prompts";

mongoose.connect(uri, function(err, res) {
	if (err) {
		console.log("error: " + err);
	}
	else {
		console.log("connected to: " + uri);
	}
});

var players = 3;
var size = players * 2;

var prompts = db.products.aggregate([{$sample: {size: 10}}]);