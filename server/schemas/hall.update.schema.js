const Joi = require("joi");
Joi.joiObjectid = require("joi-objectid")(Joi);

const hallUpdateValSchema = Joi.object({
  hallId: Joi.joiObjectid(),
  name: Joi.string().min(3).max(20),
  column: Joi.number().min(5).max(15),
  row: Joi.number().min(5).max(20),
});

module.exports = hallUpdateValSchema;
