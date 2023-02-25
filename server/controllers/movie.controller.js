const MovieSchema = require("../schemas/movie.schema");
const mapping = require("../mappings/validate.map");
const Movie = require("../models/movie.model");
const deleteImage = require("../helper/delete.img");

exports.get = (req, res) => {
  Movie.find().exec((error, data) => {
    if (error) return res.status(500).send({ error });

    res.send(data);
  });
};

exports.getById = async (req, res) => {
  const validate = mapping.mapping(req, MovieSchema.MovieDeleteValSchema);
  if (validate.valid)
    return res.status(422).send({ message: validate.message });

  const movie = await Movie.findById(req.body.movieId);

  if (!movie) return res.status(404).send({ message: "Movie not found!" });

  return res
    .status(200)
    .send({ message: "Successfully find movie!", data: movie });
};

exports.create = (req, res) => {
  const images = [];
  const { files } = req;

  if (files) {
    images.push(files.file[0].filename);
    images.push(files["file-cover"][0].filename);
  } else {
    images.push(req.file.filename);
  }

  const validate = mapping.mapping(req, MovieSchema.MovieCreateValSchema);
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

exports.update = async (req, res) => {
  const validate = mapping.mapping(req, MovieSchema.MovieUpdateValSchema);
  if (validate.valid)
    return res.status(422).send({ message: validate.message });

  const oldMovie = await Movie.findById(req.body.movieId);
  if (!oldMovie) return res.status(404).send({ message: "Movie not found!" });

  const newMovie = await Movie.findByIdAndUpdate(req.body.movieId, {
    ...req.body,
    movieId: undefined,
  });

  return res
    .status(201)
    .send({ message: "Successfully updated movie!", data: newMovie });
};

exports.delete = async (req, res) => {
  const validate = mapping.mapping(req, MovieSchema.MovieDeleteValSchema);
  if (validate.valid)
    return res.status(422).send({ message: validate.message });

  const oldMovie = await Movie.findByIdAndDelete(req.body.movieId);
  if (!oldMovie) return res.status(404).send({ message: "Movie not found!" });

  oldMovie.image && deleteImage(oldMovie.image);
  oldMovie.coverImage && deleteImage(oldMovie.coverImage);
  return res
    .status(200)
    .send({ message: "Successfully deleted movie!", data: oldMovie });
};
