const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photo = new Schema({
  id: { type: Number, index: true },
  title: String,
  path: String,
  intro: String,
  location: String,
  device: String,
  isTop: Boolean
});

module.exports = mongoose.model('Photo', photo);