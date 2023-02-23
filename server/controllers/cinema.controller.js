const Cinema = require("../models/cinema.model");
const cinemaCreateValSchema = require("../schemas/cinema.create.schema");
const cinemaUpdateValSchema = require("../schemas/cinema.update.schema");
const cinemaDeleteValSchema = require("../schemas/cinema.delete.schema");
const mapping = require("../mappings/validate.map");

exports.create = async (req, res) => {
  try {
    const validate = mapping.mapping(req, cinemaCreateValSchema);
    if (validate.valid)
      return res.status(422).send({ message: validate.message });

    const { name } = req.body;

    const oldCinema = await Cinema.findOne({ name });

    if (oldCinema) {
      return res.status(409).send({ message: "Cinema already Exist!" });
    }

    const newCinema = await Cinema.create({ name });
    return res
      .status(201)
      .send({ message: "Successfully added cinema!", cinema: newCinema });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

exports.update = async (req, res) => {
  const validate = mapping.mapping(req, cinemaUpdateValSchema);
  if (validate.valid)
    return res.status(422).send({ message: validate.message });

  const { name, cinemaId } = req.body;

  const oldCinema = await Cinema.findById(cinemaId);
  if (!oldCinema) return res.status(404).send({ message: "Cinema not found!" });

  const newCinema = await Cinema.findByIdAndUpdate(cinemaId, { name });

  return res
    .status(201)
    .send({ message: "Successfully updated cinema!", cinema: newCinema });
};

exports.delete = (req, res) => {
  const validate = mapping.mapping(req, cinemaDeleteValSchema);
  if (validate.valid)
    return res.status(422).send({ message: validate.message });

  const { cinemaId } = req.body;

  _ = Cinema.findByIdAndDelete(cinemaId, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Deleted article ${articleID} successfully`);
    }
  });
  return;
};
