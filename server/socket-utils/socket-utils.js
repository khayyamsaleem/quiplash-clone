const mongoose = require('mongoose');
const Prompt = require('./../models/prompts');
const config = require('./../config/default');

//update dev db server
require('dotenv').config();
//const env = (process.env.NODE_ENV).toUpperCase();

const dbURL = config.dbURL || process.env['DB_URL_' + env];

mongoose.connect(dbURL, {useNewUrlParser: true});
const pairLength = 2;

function getPrompts(limit, rand) {
	Prompt.find({}).limit(limit).skip(rand).exec(function(err, prompts) {
		if (!err) {
			console.log(`prompts ${prompts}\n`);
			return prompts;
		} else {
			console.log(`err ${err}\n`);
			return null;
		}
	});
}

function getPairs(players, round) {
	//make sure that the first element is equal to the last element
	players.push(players[0]);
	round = round || 1;

	for (let i = 1; i < round; i++) {	
		players.shift();
		players.push(players[i-1]);
		
	}

	//create a 2d array of player pairs
	const pairs = new Array(players.length-1);
	for (let i = 0; i < pairs.length; i++) {
		//create a new array	
		pairs[i] = new Array(pairLength);
		for (let j = 0; j < pairLength-1; j++) {
			pairs[i][j] = players[i];
			pairs[i][j+1] = players[i+1];
		}	
	}
	
	return pairs;
}

/* TODO: Test cases
getPrompts(4, 5);
console.log(getPairs(['p1', 'p2', 'p3'], 3)); */


module.exports = {
	getPrompts,
	getPairs
}

