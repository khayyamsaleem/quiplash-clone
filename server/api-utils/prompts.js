const mongoose = require('mongoose');
const Prompt = require('./../models/prompts');

function createPrompt(req, res) {
	const ques = req.body.question;

	Prompt.findOne({ question: ques}, (err, prompt) => {
		/* no duplicate  */
		if (err) {
			new Prompt({
				question: ques
            }).save((err, promptt) => {
				if(err) { /*failed to save, server error */
					return res.status(500).json({ message: err });
				} else { /* saved successfully */
					return res.status(200).json({ success: true, question: promptt });
				}
			});
        } else { /* already exists */
			return res.status(200).json({ success: true, question: promptt });
        }
    });
}

function getPrompt(req, res) {
	Prompt.findOne({}, (err, promptt) => {
		if (promptt === undefined || promptt === null) { /* not found */
			return res.status(404).json({ success: false });
		} else { /* found */
			return res.status(200).json({ success:true, question: promptt });
		}
	});
}

//add function to return N random prompts at a time

module.exports = {
	createPrompt,
	getPrompt
}
