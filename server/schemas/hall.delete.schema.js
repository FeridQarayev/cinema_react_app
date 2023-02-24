const Joi = require("joi");
Joi.joiObjectid = require("joi-objectid")(Joi);

const hallDeleteValSchema = Joi.object({
  hallId: Joi.joiObjectid().required(),
});

module.exports = hallDeleteValSchema;
