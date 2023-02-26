const Hall = require("../models/hall.model");
const Cinema = require("../models/cinema.model");
const mapping = require("../mappings/validate.map");
const HallSchema = require("../schemas/hall.schema");

exports.get = (req, res) => {
  Hall.find()
    .populate("cinema")
    .exec((error, data) => {
      if (error) return res.status(500).send({ error });

      res.send(data);
    });
};

exports.getById = async (req, res) => {
  const validate = mapping.mapping(req, HallSchema.hallDeleteValSchema);
  if (validate.valid)
    return res.status(422).send({ message: validate.message });

  const { hallId } = req.body;

  const hall = await Hall.findById(hallId).populate("cinema");

  if (!hall) return res.status(404).send({ message: "Hall not found!" });

  return res
    .status(200)
    .send({ message: "Successfully find hall!", data: hall });
};

exports.create = async (req, res) => {
  const validate = mapping.mapping(req, HallSchema.hallCreateValSchema);
  if (validate.valid)
    return res.status(422).send({ message: validate.message });

  const { name, column, row, cinemaId } = req.body;

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
      cinema: cinemaId,
    },
  });

  return res
    .status(201)
    .send({ message: "Successfully added hall!", data: newHall });
};

exports.update = async (req, res) => {
  const validate = mapping.mapping(req, HallSchema.hallUpdateValSchema);
  if (validate.valid)
    return res.status(422).send({ message: validate.message });

  const { name, column, row, hallId } = req.body;

  const oldHall = await Hall.findByIdAndUpdate(hallId, { name, column, row });
  if (!oldHall) return res.status(404).send({ message: "Hall not found!" });

  return res
    .status(201)
    .send({ message: "Successfully updated hall!", data: oldHall });
};

exports.delete = async (req, res) => {
  const validate = mapping.mapping(req, HallSchema.hallDeleteValSchema);
  if (validate.valid)
    return res.status(422).send({ message: validate.message });

  const { hallId } = req.body;

  const oldHall = await Hall.findByIdAndDelete(hallId);
  if (!oldHall) return res.status(404).send({ message: "Hall not found!" });

  await Cinema.findByIdAndUpdate(oldHall.cinema, {
    $pull: {
      halls: hallId,
    },
  });

  return res
    .status(200)
    .send({ message: "Successfully deleted hall!", data: oldHall });
};
