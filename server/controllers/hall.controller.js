const Hall = require("../models/hall.model");
const Cinema = require("../models/cinema.model");
const mapping = require("../mappings/validate.map");
const HallCreateValSchema = require("../schemas/hall.create.schema");
const HallUpdateValSchema = require("../schemas/hall.update.schema");

exports.create = async (req, res) => {
  const validate = mapping.mapping(req, HallCreateValSchema);
  if (validate.valid)
    return res.status(422).send({ message: validate.message });

  const { name, column, row, cinemaId } = req.body;

  const oldHall = await Hall.findOne({ name });

  if (oldHall) return res.status(409).send({ message: "Hall already Exist!" });

  const newHall = await Hall.create({ name, column, row });

  const oldCinema = await Cinema.findByIdAndUpdate(cinemaId, {
    $push: {
      halls: newHall._id,
    },
  });

  if (!oldCinema) {
    await Hall.findByIdAndDelete(newHall._id);
    return res.status(404).send({ message: "Cinema not found!" });
  }

  await Hall.findByIdAndUpdate(newHall._id, {
    $set: {
      ciname: cinemaId,
    },
  });

  return res
    .status(201)
    .send({ message: "Successfully added cinema!", hall: newHall });
};

exports.update = async (req, res) => {
  const validate = mapping.mapping(req, HallUpdateValSchema);
  if (validate.valid)
    return res.status(422).send({ message: validate.message });

  const { name, column, row, hallId } = req.body;

  const oldHall = await Hall.findByIdAndUpdate(hallId, { name, column, row });
  if (!oldHall) return res.status(404).send({ message: "Hall not found!" });

  return res
    .status(201)
    .send({ message: "Successfully updated hall!", hall: oldHall });
};

exports.delete = (req, res) => {
    const validate = mapping.mapping(req, HallUpdateValSchema);
    if (validate.valid)
      return res.status(422).send({ message: validate.message });
}
