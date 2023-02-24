const Hall = require("../models/hall.model");
const Cinema = require("../models/cinema.model");
const mapping = require("../mappings/validate.map");
const HallCreateValSchema = require("../schemas/hall.create.schema");

exports.create = async (req, res) => {
  const validate = mapping.mapping(req, HallCreateValSchema);
  if (validate.valid)
    return res.status(422).send({ message: validate.message });

  const { name, column, row, cinemaId } = req.body;

  const oldHall = await Hall.findOne({ name });

  if (oldHall) return res.status(409).send({ message: "Hall already Exist!" });

  const newHall = await Hall.create({ name, column, row });
  console.log(newHall);

  Hall.findByIdAndUpdate(
    newHall._id,
    {
      $set: {
        ciname: cinemaId,
      },
    },
    (error) => {
      if (error) return res.status(500).send({ error });
    }
  );

  Cinema.findByIdAndUpdate(
    cinemaId,
    {
      $push: {
        halls: newHall._id,
      },
    },
    (error) => {
      if (error) return res.status(500).send({ error });
    }
  );

  return res
    .status(201)
    .send({ message: "Successfully added cinema!", hall: newHall });
};
