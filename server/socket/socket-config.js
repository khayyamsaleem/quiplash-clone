const Game = require('../custom-classes/game.js');

module.exports = function (io) {

	const currentPrivateRooms = {};
	const min = 3;

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
				io.to(socket.id).emit('join-private-room', { msg: 'code invalid' });
			}

			cb(null, 'Done');
		});

		socket.on('start-game', function (msg, cb) {
			cb = cb || function () { };

			// check that the minimum threshold is met
			// msg.code is room code
			if (currentPrivateRooms.hasOwnProperty(msg.code)) {
				//check if the number of players is at least 3
				const num = (currentPrivateRooms[msg.code]).getNumberofPlayers();

				if (num >= min) {
					socket.emit('start-game', { start: 'true' });
				} else {
					socket.emit('start-game', { start: 'false' });
				}
			} else {
				socket.emit('start-game', { start: 'false' });
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
		socket.on('create-prompt', function (msg) {

		})

		//on disconnect, 
		socket.on('disconnect', () => {
		});
	});


}
