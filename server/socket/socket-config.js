module.exports = function(io) {
	
	const currentPrivateRooms = {};

	//io function
	io.on('connection', socket => {
		console.log(`Client ${socket.id} just connected`);
		console.log('connected');

		//socket functions
		socket.on('test', function(msg, cb) {
			cb = cb || function() {};

			socket.emit("test", "received");
			cb(null, "Done");
		});

		socket.on('create-private-room', function(msg, cb) {
			cb = cb || function() {};
	
			//generate random number, can abstract this out so upper and lower bound are passed or are in env file
			const rand = Math.floor((Math.random() * 8000) + 7000);
			currentPrivateRooms[socket.id+""] = rand;

			socket.emit('create-private-room', rand);
			cb(null, "Done");
		});

		socket.on('disconnect', () => {
			currentPrivateRooms[socket.id+""] = undefined;
			console.log(`Client ${socket.id} disconnected and key code is ${currentPrivateRooms[socket.id+""]}`);
		});
	});


}
