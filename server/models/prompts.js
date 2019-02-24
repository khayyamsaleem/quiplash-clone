const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const promptSchema = new Schema({
      question: String
});

module.exports = mongoose.model('Prompt', promptSchema);
