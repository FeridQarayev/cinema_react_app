const mapping = require("../mappings/validate.map");
const Session = require("../models/session.model");
const Movie = require("../models/movie.model");
const Hall = require("../models/hall.model");
const SessionSchema = require("../schemas/session.schema");

exports.get = (req, res) => {
  Session.find()
    .populate("movie")
    .populate("hall")
    .exec((error, data) => {
      if (error) return res.status(500).send({ error });

      res.send(data);
    });
};

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

exports.update = async (req, res) => {
  const validate = mapping.mapping(req, SessionSchema.SessionUpdateValSchema);
  if (validate.valid)
    return res.status(422).send({ message: validate.message });

  const session = await Session.findByIdAndUpdate(req.body.sessionId, {
    ...req.body,
    sessionId: undefined,
  });
  if (!session) return res.status(404).send({ message: "Session not found!" });

  return res
    .status(201)
    .send({ message: "Successfully updated session!", data: session });
};

exports.delete = async (req, res) => {
  const validate = mapping.mapping(req, SessionSchema.SessionDeleteValSchema);
  if (validate.valid)
    return res.status(422).send({ message: validate.message });

  const session = await Session.findByIdAndDelete(req.body.sessionId);
  if (!session) return res.status(404).send({ message: "Session not found!" });

  return res
    .status(200)
    .send({ message: "Successfully deleted session!", data: session });
};
