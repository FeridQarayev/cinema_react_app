const verifyImageFile = (req, res, next) => {
  const { file } = req;
  console.log(file);
  if (
    file.mimetype == "image/png" ||
    file.mimetype == "image/jpg" ||
    file.mimetype == "image/jpeg"
  ) {
    next();
  } else {
    res.status(422)({ message: "Only .png, .jpg and .jpeg format allowed!" });
  }
};

module.exports = verifyImageFile;
