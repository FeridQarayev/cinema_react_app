const Joi = require("joi");

const cinemaValSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
});

module.exports = cinemaValSchema;
