const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photo = new Schema({
  id: { type: Number, index: true },
  title: String,
  path: String,
  intro: String,
  is_top: Boolean
});

module.exports = mongoose.model('Photo', photo);