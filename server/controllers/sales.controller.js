const Hall = require("../models/hall.model");
const Session = require("../models/session.model");
const Sales = require("../models/sales.model");
const SalesSchema = require("../schemas/sales.schema");

exports.get = (req, res) => {
  Sales.find().exec((error, data) => {
    if (error) return res.status(500).send({ error });

    res.send(data);
  });
};

exports.getById = async (req, res) => {
  const validate = mapping.mapping(req, SalesSchema.salesGetValSchema);
  if (validate.valid)
    return res.status(422).send({ message: validate.message });

  const { userId } = req.body;

  const sales = await Sales.find({ userId });

  if (!sales) return res.status(404).send({ message: "Sales not found!" });

  return res
    .status(200)
    .send({ message: "Successfully find sales!", data: sales });
};

exports.create = async (req, res) => {
  const validate = mapping.mapping(req, SalesSchema.salesCreateValSchema);
  if (validate.valid)
    return res.status(422).send({ message: validate.message });

  const { sessionId, places } = req.body;

  const newSale = await Sales.create({ ...req.body });

  const oldSession = await Session.findByIdAndUpdate(sessionId, {
    $push: {
      reserved: {
        ...places,
      },
    },
  });

  if (!oldSession) {
    await Sales.findByIdAndDelete(newSale._id);
    return res.status(404).send({ message: "Session not found!" });
  }

  return res
    .status(201)
    .send({ message: "Successfully added sales!", data: newSale });
};
