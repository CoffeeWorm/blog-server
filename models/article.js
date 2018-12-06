const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artcleSchema = new Schema({
  id: { type: Number, index: true},
  title: String,
  content: String,
  create_time: Number,
  read_number: Number,
  like_number: Number,
  is_top: Number,
  is_ad: Boolean
});

module.exports = mongoose.model('Articles', artcleSchema);