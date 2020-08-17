const path = require("path");
const multer = require("multer");
//define the storage location for our images:
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    console.log(file);
    cb(
      null,
      file.fieldname + `-` + Date.now() + path.extname(file.originalname)
    );
  },
});

var upload = multer({
  storage: storage,
  limits: { filesize: 1000000 },
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
    console.log(file);
  },
  limits: {
    fileSize: 1024 * 1024 * 2,
  },
}).single("image");
//check file type
const checkFileType = (file, cb) => {
  //allowed ext
  const filetypes = /jpg|png|jpeg|gif/;
  //check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  //chech mime
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("ERROR:IMAGES ONLY!");
  }
};
module.exports = upload;
