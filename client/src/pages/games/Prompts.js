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

<<<<<<< HEAD
var prompts = db.products.aggregate([{$sample: {size: size}}]);
=======
var prompts = db.products.aggregate([{$sample: {size: 10}}]);
>>>>>>> 38aa35eb0166ece32e46b2995f7839fb5a9f7ceb
