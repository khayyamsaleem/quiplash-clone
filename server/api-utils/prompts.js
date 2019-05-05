const mongoose = require('mongoose');
const Prompt = require('./../models/prompts');
const config = require('./../config/default');

//update dev db server
require('dotenv').config();
//const env = (process.env.NODE_ENV).toUpperCase();

const dbURL = config.dbURL || process.env['DB_URL_' + env];

mongoose.connect(dbURL, {useNewUrlParser: true});


function createPrompt(req, res) {
	let ques = '';
	if (req.body.question === undefined) {
		return res.status(400).json({ success: false, err: 'Missing question property'});
	} else {
		ques = req.body.question;
	}

	Prompt.findOne({ question: ques}, (err, prompt) => {
		/* no duplicate  */
		if (err) {
			new Prompt({
				question: ques
            }).save((err, promptt) => {
				if(err) { /*failed to save, server error */
					return res.status(500).json({ success: false,  err: err });
				} else { /* saved successfully */
					return res.status(200).json({ success: true, question: promptt });
				}
			});
        } else { /* already exists */
			return res.status(200).json({ success: true, question: ques });
        }
    });
}

function getPrompt(req, res) {
	Prompt.findOne({}, (err, promptt) => {
		if (promptt === undefined || promptt === null) { /* not found */
			return res.status(404).json({ success: false, question: '' });
		} else { /* found */
			return res.status(200).json({ success:true, question: promptt });
		}
	});
}



//add function to return N random prompts at a time
function getRandom(n) {
	Prompt.findRandom({}, {}, {limit: n}, function(err, results) {
		if(!err) {
			console.log(`results ${results}\n`);
		} else {
			console.log(`err is ${err}\n`);
		}
	});

}



getRandom(4);

module.exports = {
	createPrompt,
	getPrompt
}
