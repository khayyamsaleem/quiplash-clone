const mocha = require('mocha');
const should = require('chai').should();
const expect = require('chai').expect;
const server = require('./../server.js');
const http = require('http');

const io = require('socket.io-client');
const url = "http://localhost:8080";

describe('Socket tests', function() {
	let testServer = undefined;
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
				rand.should.be.a('number');
				client.disconnect();
				done();
			});

			client.emit('create-private-room', " ");
		});
	});

});
