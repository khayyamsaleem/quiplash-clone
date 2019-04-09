const Game = require('../custom-classes/game.js');

module.exports = function(io) {
	
	const currentPrivateRooms = {};

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
		socket.on('code-entered', function(msg, cb) {
			cb = cb || function() {};

			if (currentPrivateRooms.hasOwnProperty(msg)) {
				if ((currentPrivateRooms[msg]).addPlayer(socket.id)){
					socket.emit('code-entered', 'true');
				} else {
					socket.emit('code-entered', 'room full');
				}
			} else {
				socket.emit('code-entered', 'code invalid');
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
