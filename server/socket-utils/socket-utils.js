const mongoose = require('mongoose');
const Prompt = require('./../models/prompts');
const config = require('./../config/default');

//update dev db server
require('dotenv').config();
//const env = (process.env.NODE_ENV).toUpperCase();

const dbURL = config.dbURL || process.env['DB_URL_' + env];

mongoose.connect(dbURL, {useNewUrlParser: true});
const pairLength = 2;
var skip = 5;

async function getPrompts(limit, rand) {
	Prompt.find({}).limit(limit).skip(rand).exec(async function(err, prompts) {
		if (!err) {
			console.log(`prompts ${prompts}\n`);
			return prompts;
		} else {
			console.log(`err ${err}\n`);
			return null;
		}
	});
}

async function getRandomPrompts(n) {
      await Prompt.findRandom({}, {}, {limit: n}, async function(err, results) {
                if(!err) {
                        console.log(`results ${results}\n`);
			return await results;
                } else {
                        console.log(`err is ${err}\n`);	
			return null;
                }
        });
}

async function getRandom(n) {
	try {
		const prompts = await Prompt.find({}).limit(n).skip(skip).exec();
		console.log("IN GET RANDOM: ", prompts);

		skip =  (skip < 400) ? skip+n : 0 ;

		return prompts.map(p => p.question);

	} catch(err) {
		console.log(`err is ${err}\n`)
	}
}
 
function getPairs(players, round) {
	//make sure that the first element is equal to the last element

	players = Array.from(new Set(players));

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

console.log(getPairs(['p1', 'p2', 'p3'], 1)); 
console.log(getPairs(['p1', 'p2', 'p3'], 2)); 
console.log(getPairs(['p1', 'p2', 'p3'], 3)); 

//getRandomPrompts(5);
//console.log(getRandomPrompts(5));


module.exports = {
	getPrompts,
	getPairs,
	getRandomPrompts,
	getRandom
}

