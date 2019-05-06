const Game = require('../custom-classes/game.js');
const mongoose = require('mongoose');
const Prompt = require('./../models/prompts');
const config = require('./../config/default');

require('dotenv').config();
//const env = (process.env.NODE_ENV).toUpperCase();

const dbURL = config.dbURL || process.env['DB_URL_' + env];

mongoose.connect(dbURL, {useNewUrlParser: true});

const util = require('../socket-utils/socket-utils.js');

module.exports = function (io) {

	const currentPrivateRooms = {};
	const min = 3;
	var rounds = 3;

	// a room is of the form
	// code: { Game }

	//io function
	io.on('connection', socket => {

		//create private room and recieve a code
		socket.on('create-private-room', function (msg) {
			console.log(`${socket.id} is creating a room`)
			//generate random number, can abstract this out so upper and lower bound are passed or are in env file
			const rand = Math.floor((Math.random() * 8000) + 7000);

			const game = new Game(rand);
			game.roomName = msg.roomName
			game.addPlayer(socket.id, msg.playerName)
			currentPrivateRooms[rand] = game;

			io.to(socket.id).emit('create-private-room', {
				roomCode: rand,
				roomName: game.roomName
			})
      		// cb(null, 'Done');
		});

		//TODO: verify code to join private room
		socket.on('join-private-room', function (msg, cb) {
			console.log(`${socket.id} is joining a room`)
			cb = cb || function () { };
			// msg.code is room code
			// msg.name is players name
			if (msg.code) {
				let roomCode = parseInt(msg.code)
				if (currentPrivateRooms.hasOwnProperty(roomCode)) {
					// if game exists add user
					if ((currentPrivateRooms[roomCode]).addPlayer(socket.id, msg.name)) {
						io.to(socket.id).emit('join-private-room', { msg: 'success', names: ['cheese'], roomName: currentPrivateRooms[roomCode].roomName});
					} else {
						io.to(socket.id).emit('join-private-room', { msg: 'room full' });
					}
				}
			} else {
				io.to(socket.id).emit('join-private-room', { msg: 'code invalid', name:''});

			}

			cb(null, 'Done');
		});

		socket.on('start-game', async function(msg, cb) {
			cb = cb || function() {};
			
			// check that the minimum threshold is met
			// msg.code is room code
			if (currentPrivateRooms.hasOwnProperty(msg.code)) {
				//check if the number of players is at least 3
				const num = (currentPrivateRooms[msg.code]).getNumberofPlayers();

				if (num >= min) {
					//get the keys, i.e socket id from all the players in the game
					//put them in an array called players
					const currPlayers = Object.keys(currentPrivateRooms[msg.code].players);

					//get the number of prompts needed from the database
					//const results = util.getRandomPrompts(num * rounds);
					const results = util.getRandom(num*rounds);
//					const results = util.getPrompts(num, num*rounds);
					console.log('Prompts ', results);

					results.then(prompts => {

							//
							console.log("PROMPTS FROM RESULTS", prompts);
							//create a loop for each round and get the pairs for that round
							for (let i = 0; i < rounds; i++) {
								const r = i + 1;
								const pairs = util.getPairs(currPlayers, r);
								console.log("PAIRS ", currPlayers, pairs);

								const limit = (i * num) + num;
								const start = i* num;
								//let k = 0;
								console.log("NUM", num);
								console.log("LIMIT and START", limit, start);
								for (let j = start, k = 0; j < limit; j++, k++) {
									currentPrivateRooms[msg.code]['round_'+r] = {};
									currentPrivateRooms[msg.code]['round_'+r][prompts[j]] = {};

									//initialize pairs on this prompt with empty quotes
									
									
							//		console.log(`IN RESULTS HERE IS PROMPT ${prompts[j]} at index ${j} ${currentPrivateRooms[msg.code]['round_'+r][prompts[j]]}\n`);
									currentPrivateRooms[msg.code]['round_'+r][prompts[j]][pairs[k][0]] = '';
									currentPrivateRooms[msg.code]['round_'+r][prompts[j]][pairs[k][1]] = '';

							//		console.log(`PLAYER `, (currentPrivateRooms[msg.code].players[pairs[k][0]]));
									(currentPrivateRooms[msg.code].players[pairs[k][0]]).addPrompt(prompts[j]);
									(currentPrivateRooms[msg.code].players[pairs[k][1]]).addPrompt(prompts[j]);
								}

							}
							
							//assign each pair a prompt
							//put those assignments in an object in Game
							//also store the prompt in the player object, under prompts

							//for each player, emit their prompts to repesctive client ids

							for (let i = 0; i < currPlayers.lenght; i++) {
								const qs = (currentPrivateRooms[msg.code].players[currPlayers[i]]).getPrompts();
								console.log("SENFING PROMPTS", qs);
								io.to(currPlayers[i]).emit('start-game', { start: 'true', prompts: qs});
							}
					});
					//socket.emit('start-game', { start: 'true' }); 
				} else {
					socket.emit('start-game', { start: 'false', prompts: null });
				}
			} else {
				socket.emit('start-game', { start: 'false', prompts: null});	
			}

			cb(null, 'Done');
		});

		//end game and room code will be removed
		socket.on('game-over', function (msg, cb) {
			cb = cb || function () { };

			if (currentPrivateRooms[msg]) {
				delete currentPrivateRooms[msg];
			}
			socket.emit('game-over', "");
			cb(null, "Done");
		});

		//TODO: return number of quips when game starts
		//TODO: create a public room
		//TODO; join a public room

		//on disconnect,
		socket.on('disconnect', () => {
		});


		socket.on('add-prompt', function(msg, cb) {
			let prompt = msg.prompt;
			console.log(prompt);

			new Prompt({
				question: prompt
			}).save((err, promptt) => {
	if(err) { /*failed to save, server error */
		console.log("error")
	} else { /* saved successfully */
		console.log('success')
	}
});




		});


	});




}
