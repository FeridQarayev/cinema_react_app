const Cinema = require("../models/cinema.model");

exports.create = async (req, res) => {
  try {
    const { name } = req.body;

    const oldCinema = await Cinema.findOne({ name });

    if (oldCinema) {
      return res.status(409).send({ message: "Cinema already Exist!" });
    }

    const newCinema = await Cinema.create({ name });

    res.status(201).send({ message: "Successfully added cinema!", newCinema });
  } catch (error) {}
};
