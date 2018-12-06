const mongoose = require('mongoose');
let db;
mongoose.connect(
  'mongodb://localhost:27017/test',
  {
    useNewUrlParser: true,
    autoIndex: false
  }
);

db = mongoose.connection;

db.on('error', err => {
  console.log(`Mongodb conencted error: ${err}`);
  mongoose.disconnect();
});

db.once('open', () => {
  console.log('Database connected!');
});

db.on('close', function () {
  console.log('Database conenction closed!');
});

module.exports = db;