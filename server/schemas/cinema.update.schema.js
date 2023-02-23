const Joi = require("joi");
Joi.joiObjectid = require("joi-objectid")(Joi);

const cinemaUpdateValSchema = Joi.object({
  cinemaId: Joi.joiObjectid().required(),
  name: Joi.string().min(3).max(20).required(),
});

module.exports = cinemaUpdateValSchema;
