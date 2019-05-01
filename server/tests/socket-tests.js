const mocha = require('mocha');
const should = require('chai').should();
const expect = require('chai').expect;
const server = require('./../server.js');
const http = require('http');

const io = require('socket.io-client');
const url = "http://localhost:8080";

describe('Socket tests', function() {
	let testServer = undefined;
	let trand;
	let name;

	const options = {
		transports: ['websocket'],
		'force new connection': true
	};

	before(function(done) {
		testServer = server;
		console.log("Starting the server");
		done();
	});

	it("should receive connection", function(done) {
		const client = io.connect(url, options);

		client.once('connect', function() {
			client.once('test', function(msg) {
				msg.should.equal("received");
				client.disconnect();
				done();
			});

			client.emit('test', " ");	
		});
	
	});

	it("should return a random for the room code", function(done) {
		const client = io.connect(url, options);
		
		client.once('connect', function() {
		
			client.once('create-private-room', function(rand) {
				trand = rand;
				rand.should.be.a('number');
				client.disconnect();
				done();
			});

			console.log(` Creating privatee room \n`);
			client.emit('create-private-room', " ");
		});
	});

	it('should join game with valid code', function(done) {
		const client = io.connect(url, options);
		name = 'Alice';

		client.once('connect', function() {
			
			client.once('join-private-room', function(msg) {
				(msg.msg).should.equal('true');
				client.disconnect();
				done();
			});
			
			//send random code
			console.log(`Sent random ${trand}\n`);
			client.emit('join-private-room', { code: trand, name: name });
		});

	});

	it('should not join game unless minimum of 3 players', function(done) {
		const client = io.connect(url, options) 

		client.once('connect', function() {
			client.once('start-game', function(msg) {
				(msg.start).should.equal('false');
				client.disconnect();
				done();
			});

			client.emit('start-game', { code: trand });

		});
	
	});


	it('should remove code when game is done', function(done) {
		const client = io.connect(url, options);
		
		client.once('connect', function() {
		
			client.once('game-over', function(rand) {
				rand.should.have.lengthOf(0);
				trand = undefined;	//code is now invalid
				client.disconnect();
				done();
			});

			//send random code
			client.emit('game-over', trand);
		});
	});

	it('should not join game with invalid code', function(done) {
		const client = io.connect(url, options);
		
		console.log(`Sent random ${trand}\n`);
		client.once('connect', function() {
			
			client.once('join-private-room', function(msg) {
				(msg.msg).should.equal('code invalid');
				client.disconnect();
				done();
			});
			
			//send random code
			console.log(`Sent random ${trand}\n`);
			client.emit('join-private-room', { code: trand, name:'' });
		});

	});
});
