const Joi = require("joi");

const MovieUpdateValSchema = Joi.object({
  name: Joi.string().min(3).max(70),
  actor: Joi.string().min(3).max(70),
  director: Joi.string().min(3).max(70),
  duration: Joi.string().min(3).max(70),
  ageLimit: Joi.number().integer().min(0).max(100),
  sessionTime: Joi.date(),
  sessionTimeOut: Joi.date(),
  formats: Joi.object({
    d2: Joi.boolean(),
    d3: Joi.boolean(),
    d4: Joi.boolean(),
  }),
  languages: Joi.object({
    az: Joi.boolean(),
    tu: Joi.boolean(),
    ru: Joi.boolean(),
    en: Joi.boolean(),
  }),
  genre: Joi.string(),
  synopsis: Joi.string().min(0).max(900),
  rating: Joi.number().min(0).max(10),
});

module.exports = MovieUpdateValSchema;
