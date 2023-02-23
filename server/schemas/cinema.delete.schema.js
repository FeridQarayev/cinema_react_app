const Joi = require("joi");
Joi.joiObjectid = require("joi-objectid")(Joi);

const cinemaDeleteValSchema = Joi.object({
  cinemaId: Joi.joiObjectid().required(),
});

module.exports = cinemaDeleteValSchema;
