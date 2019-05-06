const mongoose = require('mongoose');
const random = require('mongoose-simple-random');
const Schema = mongoose.Schema;

const promptSchema = new Schema({
      question: String
});

promptSchema.plugin(random);

module.exports = mongoose.model('Prompt', promptSchema);
