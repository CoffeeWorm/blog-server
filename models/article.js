const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artcleSchema = new Schema({
  id: { type: Number, index: true},
  title: String,
  content: String,
  intro: String,
  createTime: String,
  isTop: Boolean,
  isAd: Boolean
});

module.exports = mongoose.model('Articles', artcleSchema);