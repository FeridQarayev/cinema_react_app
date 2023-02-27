const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { promisify } = require("util");
const readFileAsync = promisify(fs.unlink);

const saveFilesToFolder = function (folder) {
  return async (req, res, next) => {
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
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
      { name: "fileCover", maxCount: 1 },
    ]);

    upload(req, res, (err) => {
      if (err) return res.status(422).send({ message: err.message });
      next();
    });
  };
};

const deleteFilesToFolder = function () {
  return async (req, res) => {
    const { path } = req.body;
    if (path) {
      const deletedImg = await readFileAsync(
        __dirname + "../../../client/src/images/movies/" + req.body.path,
        (err, data) => {
          if (err) return res.status(404).send({ message: err });
          return res
            .status(200)
            .send({ message: "Deleted image!", data: data });
        }
      );
    }
    return res.status(422).send({ message: "path required!" });
  };
};

const upload = {
  saveFilesToFolder,
  deleteFilesToFolder,
};

module.exports = upload;
