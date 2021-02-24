const path = require('path');
const multer = require('@koa/multer');

const upload = (url) => {
  const generateDir = require('./generateDir');

  const storage = multer.diskStorage({
    // 按照 path 上传图片
    destination: (ctx, file, cb) => {
      const pathNow = `uploads/${url}`;
      generateDir(pathNow, cb(null, pathNow));
    },
    filename: (ctx, file, cb) => {
      // const extname = path.extname(file.originalname);
      // cb(null, `${file.fieldname}-${Date.now()}${extname}`);
      cb(null, file.originalname);
    }
  });

  return multer({ storage });
};

module.exports = upload;