const express = require('express');
const imageController = require('../controllers/image-controller');
const upload = require('../../config/multer-config');

const router = express.Router();

router
  .route('/')
  .get(imageController.displayPage)
  .post(upload.single('file'), imageController.uploadImage);
router.get('/:fileName', imageController.displayImage);

module.exports = router;
