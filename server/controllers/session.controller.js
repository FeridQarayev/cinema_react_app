const mapping = require("../mappings/validate.map");
const Session = require("../models/session.model");
const Movie = require("../models/movie.model");
const Hall = require("../models/hall.model");
const SessionSchema = require("../schemas/session.schema");

exports.create = async (req, res) => {
  try {
    const validate = mapping.mapping(req, SessionSchema.SessionCreateValSchema);
    if (validate.valid)
      return res.status(422).send({ message: validate.message });

    const movie = await Movie.findById(req.body.movieId);
    if (!movie) return res.status(404).send({ message: "Movie not found!" });

    const hall = await Hall.findById(req.body.hallId).populate("cinema");
    if (!hall) return res.status(404).send({ message: "Hall not found!" });

    const newSession = await Session.create({
      ...req.body,
      movie: movie._id,
      hall: hall._id,
      movieId: undefined,
      hallId: undefined,
    });

    return res
      .status(201)
      .send({ message: "Successfully added session!", data: newSession });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
