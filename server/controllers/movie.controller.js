const MovieCreateValSchema = require("../schemas/movie.create.schema");
const mapping = require("../mappings/validate.map");
const Movie = require("../models/movie.model");
const deleteImage = require("../helper/delete.img");

exports.create = (req, res) => {
  const images = [];
  const { files } = req;

  if (files) {
    images.push(files.file[0].filename);
    images.push(files["file-cover"][0].filename);
  } else {
    images.push(req.file.filename);
  }

  const validate = mapping.mapping(req, MovieCreateValSchema);
  if (validate.valid) {
    for (let i = 0; i < images.length; i++) {
      deleteImage(images[i]);
    }
    return res.status(422).send({ message: validate.message });
  }

  const {
    name,
    actor,
    director,
    duration,
    ageLimit,
    sessionTime,
    sessionTimeOut,
    formats,
    languages,
    genre,
    snyopsis,
    rating,
  } = req.body;

  const movie = new Movie({
    name,
    actor,
    director,
    duration,
    ageLimit,
    sessionTime,
    sessionTimeOut,
    formats,
    languages,
    genre,
    snyopsis,
    rating,
    image: images[0],
    coverImage: images[1] ? images[1] : "",
  });
  movie.save();
  return res
    .status(200)
    .send({ message: "Movie created successfully", data: movie });
};

exports.update = (req, res) => {
  
}