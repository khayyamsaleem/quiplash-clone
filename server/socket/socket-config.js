const Game = require('../custom-classes/game.js');
const util = require('../socket-utils/socket-utils.js');

module.exports = function(io) {
	
	const currentPrivateRooms = {};
	const min = 3;
	const rounds = 3;

	// a room is of the form
	// code: { Game }

	//io function
	io.on('connection', socket => {
		console.log(`Client ${socket.id} just connected`);
		console.log('connected');

		//socket functions
		socket.on('test', function(msg, cb) {
			cb = cb || function() {};

			socket.emit('test', 'received');
			cb(null, 'Done');
		});

		//create private room and recieve a code
		socket.on('create-private-room', function(msg, cb) {
			cb = cb || function() {};
	
			//generate random number, can abstract this out so upper and lower bound are passed or are in env file
			const rand = Math.floor((Math.random() * 8000) + 7000);

			const game = new Game(rand);
			currentPrivateRooms[rand+""] = game;

			socket.emit('create-private-room', rand);
			cb(null, 'Done');
		});

		//TODO: verify code to join private room
		socket.on('join-private-room', function(msg, cb) {
			cb = cb || function() {};
			console.log(` Here is the code recieved ${msg.code} and ${msg.name} \n`);

		    // msg.code is room code
			// msg.name is players name
			if (msg.code !== undefined) {
					if (currentPrivateRooms.hasOwnProperty(msg.code)) {
						// if game exists add user
						if ((currentPrivateRooms[msg.code+""]).addPlayer(socket.id, msg.name)){
							socket.emit('join-private-room', { msg: 'true', name: msg.name });
						} else {
							socket.emit('join-private-room', { msg: 'room full', name:''});
						}
					}
			} else {
				socket.emit('join-private-room', { msg: 'code invalid', name:''});
			}

			cb(null, 'Done');
		});

		socket.on('start-game', async function(msg, cb) {
			cb = cb || function() {};
			
			// check that the minimum threshold is met
			// msg.code is room code
			if(currentPrivateRooms.hasOwnProperty(msg.code)) {
				//check if the number of players is at least 3
				const num = (currentPrivateRooms[msg.code]).getNumberofPlayers();
				console.log(`here is the number ${num}\n`);

				if (num >= min) {
					//get the keys, i.e socket id from all the players in the game
					//put them in an array called players
					const currPlayers = Object.keys(currentPrivateRooms[msg.code].players);

					//get the number of prompts needed from the database
					const prompts = util.getRandomPrompts(num * rounds);
//					const results = util.getRandom(num*rounds);
//					const results = util.getPrompts(num, num*rounds);
					console.log('Prompts ', results);

					results.then(prompts => {
					console.log(`IN RESULSTS ${prompts}`);
					//create a loop for each round and get the pairs for that round
					for (let i = 0; i < rounds; i++) {
						const pairs = util.getPairs(currPlayers, i);

						const limit = (rounds * num) + rounds;
						let k = 0;
						for (let j = rounds * num; j < limit; j++, k++) {
							currentPrivateRooms[msg.code]['round_'+i] = {};

							//initialize pairs on this prompt with empty quotes
							currentPrivateRooms[msg.code]['round_'+(i+1)][prompts[j]][pairs[k][0]] = '';
							currentPrivateRooms[msg.code]['round_'+(i+1)][prompts[j]][pairs[k][1]] = '';

							(currentPrivateRooms[msg.code].players[pairs[k][0]]).addPrompt(prompts[j]);
							(currentPrivateRooms[msg.code].players[pairs[k][1]]).addPrompt(prompts[j]);
						}

					}
					
					//assign each pair a prompt
					//put those assignments in an object in Game
					//also store the prompt in the player object, under prompts

					//for each player, emit their prompts to repesctive client ids

					for (let i = 0; i < currPlayers.lenght; i++) {
						const prompts = (currentPrivateRooms[msg.code].players[currPlayers[i]]).getPrompts();
						io.to(currPlayers[i]).emit('start-game', { start: 'true', prompts: prompts});
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
		socket.on('game-over', function(msg, cb) {
			cb = cb || function() {};
			
			if (currentPrivateRooms[msg] !== undefined) {
				currentPrivateRooms[msg] = undefined;
				console.log(`Code is ${currentPrivateRooms[msg]}`);
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
			currentPrivateRooms[socket.id+""] = undefined;
			console.log(`Client ${socket.id} disconnected and key code is ${currentPrivateRooms[socket.id+""]}`);
			delete currentPrivateRooms[socket.id+""];
		});
	});


}
