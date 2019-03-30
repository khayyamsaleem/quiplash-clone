const fs = require('fs');
const mongoose = require('mongoose');
const Prompt = require('./../models/prompts');
const config = require('./../config/default');
const dbURL = config.dbURL;

mongoose.connect(dbURL, {useNewUrlParser: true});

/* Open and read prompts from file */
function readData() {
	fs.readFile('./../../prompts/prompts.csv', 'utf-8', (err, data) => {
		if (err) {
			console.log('Error reading file');
			return ;
		} else {
			return process(data);
		}
	});
}

/*Adds each prompt to the database */
function process(data) {
	let prompts = [];
	doc = data.split(',');
	console.log('Adding ' + doc.length + ' questions to the database');
	doc.forEach((ques) => {
		ques = ques.trim();
		new Prompt({
			question: ques
		}).save((err, q) => {
			if (err) {
				console.log('server error');
				return ;
			} else {
//				console.log('saved question ' + q.question);
			}
		});
	});

	return done(doc.length);

}

function done(num) {
	console.log('Added ' + doc.length + ' questions to the database');
	return;
}

readData();

