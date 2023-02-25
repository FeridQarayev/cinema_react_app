const Joi = require("joi");
Joi.joiObjectid = require("joi-objectid")(Joi);

const cinemaUpdateValSchema = Joi.object({
  cinemaId: Joi.joiObjectid(),
  name: Joi.string().min(3).max(20),
});

module.exports = cinemaUpdateValSchema;
