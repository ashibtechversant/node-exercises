const path = require('path');
const fs = require('fs');

const imageController = {
  displayPage: (_, res) => {
    const filePath = path.join(__dirname, '../../public', 'image-upload.html');
    res.sendFile(filePath);
  },
  uploadImage: (req, res) => {
    if (req.file) {
      const { filename } = req.file;
      return res.status(200).json({
        status: 'success',
        message: 'file uploaded successfully',
        fileName: filename,
      });
    }
    return res
      .status(400)
      .json({ status: 'failure', message: 'file uploaded failed' });
  },
  displayImage: (req, res) => {
    const { fileName } = req.params;
    const filePath = path.join(__dirname, '../../uploads', fileName);
    if (fs.existsSync(filePath)) return res.sendFile(filePath);
    return res.status(404).json({ status: 'error', message: 'file not found' });
  },
};

module.exports = imageController;
