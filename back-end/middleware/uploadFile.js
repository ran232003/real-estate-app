const multer = require("multer");
const fileType = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/files");
  },
  filename: (req, file, cb) => {
    //taking only the file extension and put random uuid.
    //that way we can upload the same pic
    const fileExtansion = fileType[file.mimetype];
    cb(null, Date.now() + "." + fileExtansion);
  },
});

const upload = multer({ storage: storage });
module.exports = upload;
