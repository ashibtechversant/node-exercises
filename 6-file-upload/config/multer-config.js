const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (_, __, callback) => {
    callback(null, path.join(__dirname, '../uploads'));
  },
  filename: (_, file, callback) => {
    callback(null, file.originalname);
  },
});
const upload = multer({ storage });

module.exports = upload;
