const Joi = require("joi");
Joi.joiObjectid = require("joi-objectid")(Joi);

const hallUpdateValSchema = Joi.object({
  hallId: Joi.joiObjectid().required(),
  name: Joi.string().min(3).max(20).required(),
  column: Joi.number().min(5).max(15).required(),
  row: Joi.number().min(5).max(20).required(),
});

module.exports = hallUpdateValSchema;