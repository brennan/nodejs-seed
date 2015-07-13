var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TestSchema = new Schema({
  title: String,
  definition: String
});

var Test = mongoose.model('Test', TestSchema);

module.exports = Test;
