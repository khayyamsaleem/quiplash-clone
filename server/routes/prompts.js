const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const promptt = require('./../api-utils/prompts');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.post('/create-prompt', promptt.createPrompt);
router.get('/get-prompt', promptt.getPrompt);

module.exports = router;
