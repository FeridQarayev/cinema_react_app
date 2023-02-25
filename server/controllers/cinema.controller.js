const Cinema = require("../models/cinema.model");
const CinemaSchema = require("../schemas/cinema.schema");
const mapping = require("../mappings/validate.map");

exports.get = (req, res) => {
  Cinema.find()
    .populate("halls")
    .exec((error, data) => {
      if (error) return res.status(500).send({ error });

      res.send(data);
    });
};

exports.getById = async (req, res) => {
  const validate = mapping.mapping(req, CinemaSchema.CinemaDeleteValSchema);
  if (validate.valid)
    return res.status(422).send({ message: validate.message });

  const { cinemaId } = req.body;

  const cinema = await Cinema.findById(cinemaId).populate("halls");

  if (!cinema) return res.status(404).send({ message: "Cinema not found!" });

  return res
    .status(200)
    .send({ message: "Successfully find cinema!", data: cinema });
};

exports.create = async (req, res) => {
  try {
    const validate = mapping.mapping(req, CinemaSchema.CinemaCreateValSchema);
    if (validate.valid)
      return res.status(422).send({ message: validate.message });

    const { name } = req.body;

    const oldCinema = await Cinema.findOne({ name });

    if (oldCinema)
      return res.status(409).send({ message: "Cinema already Exist!" });

    const newCinema = await Cinema.create({ name });
    return res
      .status(201)
      .send({ message: "Successfully added cinema!", data: newCinema });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

exports.update = async (req, res) => {
  const validate = mapping.mapping(req, CinemaSchema.CinemaUpdateValSchema);
  if (validate.valid)
    return res.status(422).send({ message: validate.message });

  const { name, cinemaId } = req.body;

  const oldCinema = await Cinema.findById(cinemaId);
  if (!oldCinema) return res.status(404).send({ message: "Cinema not found!" });

  const newCinema = await Cinema.findByIdAndUpdate(cinemaId, { name });

  return res
    .status(201)
    .send({ message: "Successfully updated cinema!", data: newCinema });
};

exports.delete = async (req, res) => {
  const validate = mapping.mapping(req, CinemaSchema.CinemaUpdateValSchema);
  if (validate.valid)
    return res.status(422).send({ message: validate.message });

  const { cinemaId } = req.body;

  const oldCinema = await Cinema.findByIdAndDelete(cinemaId);
  if (!oldCinema) return res.status(404).send({ message: "Cinema not found!" });

  return res
    .status(200)
    .send({ message: "Successfully deleted cinema!", data: oldCinema });
};
