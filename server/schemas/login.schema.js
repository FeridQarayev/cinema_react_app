const Joi = require("joi");

const loginValSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

module.exports = loginValSchema;
