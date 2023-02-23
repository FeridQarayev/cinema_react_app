const Cinema = require("../models/cinema.model");
const cinemaValSchema = require("../schemas/cinema.schema");
const mapping = require("../mappings/validate.map");

exports.create = async (req, res) => {
  try {
    const validate = mapping.mapping(req, cinemaValSchema);
    if (validate.valid)
      return res.status(422).json({ message: validate.message });

    const { name } = req.body;

    const oldCinema = await Cinema.findOne({ name });

    if (oldCinema) {
      return res.status(409).send({ message: "Cinema already Exist!" });
    }

    const newCinema = await Cinema.create({ name });

    res.status(201).send({ message: "Successfully added cinema!", newCinema });
  } catch (error) {}
};
