let mongoose = require('mongoose');
let Prompt = require('./../models/prompts');

let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('./../app');
let should = chai.should();

chai.use(chaiHttp);

describe('Prompts', () => {
	beforeEach((done) => {  /* empty the databse */
		Prompt.remove({}, (err) => {
			done();
		});
	});

  	describe('/GET prompt', () => {
	 	it('it should not GET any prompts if database is empty', (done) => {
			chai.request(app)
				.get('/prompt/get-prompt')
				.end((err, res) => {
					res.should.have.status(404);
					res.body.should.have.property('question');
					res.body.should.be.a('object');
				done();
			});
		});

	});	

});
