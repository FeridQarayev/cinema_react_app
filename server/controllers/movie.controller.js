const MovieCreateValSchema = require("../schemas/movie.create.schema");
const mapping = require("../mappings/validate.map");
const Movie = require("../models/movie.model");

exports.create = (req, res) => {
  const validate = mapping.mapping(req, MovieCreateValSchema);
  if (validate.valid)
    return res.status(422).send({ message: validate.message });

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
    files,
  } = req.body;

  const images = [];
  console.log(files);

  if (files) {
    files.forEach((file) => {
      images.push(file.filename);
    });
  } else {
    images.push(req.file.filename);
  }

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
