/*
* A user in a game
* each with a socket id and room code
*/
class Player {

	//initialize player with room code, socketid and score
	constructor(code, socketId, name) {
		this.code = code;
		this.socketId = socketId;
		this.name = name;
		this.score = 0;
	}

	//increase player score by some points
	updateScore(point) {
		point = point || 1;

		this.score += point;
	}

	getScore() {
		return this.score;
	}
}
/*
* Game class that controls
* how a game is structured,
* and accessed
******************/

class Game {
	//initialize a new game with a code
	constructor(code, max) {
		this.code = code;
		this.players = {};
		this.max = max || 6; //for now 6 is default, can change later
	}

	addPlayer(socketId, name) {
		if ((Object.keys(this.players).length <= this.max)) {
			const player = new Player(this.code, socketId, name);
			
			this.players[socketId] = player;
			console.log((this.players[socketId]));

			return true; // added successfully
		} else {
			return false; //room is full
		}
	}

	//increases the score of the user whose quip was voted for
	addVote(socketId) {
		const point = 1;  //abstract this to env variable or pass player: score

		(this.players[socketId]).updateScore(point);
		console.log((this.players[socketId]));
	}
}


const game = new Game('1234');
game.addPlayer('abcd');
game.addVote('abcd');

module.exports = Game;
