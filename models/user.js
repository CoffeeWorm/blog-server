const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  uid: { type:Number, index: true},
  name: String,
  password: String,
  create_time: String,
  role: Number,
  intro: String,
  avatar: String,
  city: String
});

userSchema.methods.getIntro = function() {
  let res = {};
  Object.keys(this._doc).forEach(property => {
    property !== 'password' && (res[property] = this[property]);
  });
  return res;
};

userSchema.methods.checkPwd = function (pwd) {
  return this._doc.password === pwd;
};

const User = mongoose.model('User', userSchema);

module.exports = User;