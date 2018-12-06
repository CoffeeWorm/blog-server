const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const statistics = new Schema({
  id: { type: Number, index: true },
  page_view: Number,
  data: { type: String, index: true },
});

module.exports = mongoose.model('Statistics', statistics);