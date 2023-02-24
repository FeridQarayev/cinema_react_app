const Movie = require("../models/movie.model");

exports.create = (req, res) => {
  
  const { files } = req;



  if (files) {
    files.forEach((file) => {
      const obj = {
        img: {
          data: file.filename,
          contentType: "image/png",
        },
      };
      const movie = new Movie({
        image: obj.img,
      });
      movie.save();
    });
  } else {
    const obj = {
      img: {
        data: reqfile.filename,
        contentType: "image/png",
      },
    };
    const movie = new Movie({
      image: obj.img,
    });
    movie.save();
  }
  return res
    .status(200)
    .send({ message: "Movie created successfully", data: movie });
};
