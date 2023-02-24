const Movie = require("../models/movie.model");

exports.create = (req, res) => {
  const obj = {
    img: {
      data: req.file.filename,
      contentType: "image/png",
    },
  };
  const movie = new Movie({
    image: obj.img,
  });
  movie.save();
  return res
    .status(200)
    .send({ message: "Movie created successfully", data: movie });
};
