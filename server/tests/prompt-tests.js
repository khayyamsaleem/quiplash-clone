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

	describe('/POST prompt', () => {
		it('it should not POST a prompt without the question property', (done) => {
			let promt = {
				q: "Dr. Mac \"BLANK\""
			}

			chai.request(app)
				.post('/prompt/create-prompt')
				.send(promt)
				.end((err, res) => {
					res.should.have.status(400);
					res.body.should.be.a('object');
					res.body.should.have.property('err');
					res.body.should.have.property('success').eql(false);
				done();
				});
		});

		it('it should POST a prompt ', (done) => {
			let promt = {
				question: "Dr. Mac \"BLANK\""
			}
			
			chai.request(app)
				.post('/prompt/create-prompt')
				.send(promt)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('object');
					res.body.should.have.property('success').eql(true);
					res.body.should.have.property('question');
				 done();
				});
		});
	});

});
