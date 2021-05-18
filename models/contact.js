var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contact = new Schema({
  name: String,
  age: String
}, {
  collection: 'contact'
});

module.exports = mongoose.model('xxx', contact);