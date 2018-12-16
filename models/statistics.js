const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('../mongodb/db');
const statistics = new Schema({
  id: { type: Number, index: true },
  pageView: Number,
  date: { type: String, index: true },
});
// let a = mongoose.model('Statistics', statistics);
// new a({ id: 1, page_view: 0, date: +new Date() })
//   .save()
//   .then(res => {
//     console.log(res);
//   });
module.exports = mongoose.model('Statistics', statistics);