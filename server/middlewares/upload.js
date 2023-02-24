const multer = require("multer");
const path = require("path");

const saveFilesToFolder = function (folder) {
  return async (req, res, next) => {
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        console.log(file);
        cb(null, String(folder));
      },
      filename: function (req, file, cb) {
        cb(
          null,
          file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
      },
    });

    const upload = multer({
      storage: storage,
      fileFilter: async (req, file, cb) => {
        if (
          file.mimetype == "image/png" ||
          file.mimetype == "image/jpg" ||
          file.mimetype == "image/jpeg"
        ) {
          cb(null, true);
        } else {
          cb(null, true);
          cb("Only .png, .jpg and .jpeg format allowed!");
        }
      },
    }).fields([
      { name: "file", maxCount: 1 },
      { name: "file-cover", maxCount: 1 },
    ]);

    upload(req, res, (err) => {
      if (err) return res.status(422).send({ message: err });
      next();
    });
  };
};

module.exports = saveFilesToFolder;
