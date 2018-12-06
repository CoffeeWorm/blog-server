const multer = require('koa-multer');
const config = require('../config/multer-config');
const uuid = require('uuid/v1');

const getFileType = (file) => {
  let reg = /^\S+\.(\S+)$/i;
  return reg.exec(file.originalname)[1];
};

const storage = multer.diskStorage({
  destination: config.destination,
  filename: function (req, file, cb) {
    let fileName = `${uuid()}.${getFileType(file)}`;
    cb(null, fileName);
  }
});

const fileFilter = function (req, file, cb) {
  let arr = config.UPLOAD_TYPE;
  for (let item of arr) {
    if (!new RegExp(item, 'i').test(file.fileName)) {
      cb(null, false);
      return;
    }
  }
  cb(null, true);
};

module.exports = multer({ storage, fileFilter });