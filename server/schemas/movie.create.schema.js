const Joi = require("joi");

const MovieCreateValSchema = Joi.object({
  name: Joi.string().min(3).max(70).required(),
  actor: Joi.string().min(3).max(70).required(),
  director: Joi.string().min(3).max(70).required(),
  duration: Joi.string().min(3).max(70).required(),
  ageLimit: Joi.number().integer().min(0).max(100).required(),
  sessionTime: Joi.date().required(),
  sessionTimeOut: Joi.date().required(),
  formats: Joi.object({
    d2: Joi.boolean().required(),
    d3: Joi.boolean().required(),
    d4: Joi.boolean().required(),
  }).required(),
  languages: Joi.object({
    az: Joi.boolean().required(),
    tu: Joi.boolean().required(),
    ru: Joi.boolean().required(),
    en: Joi.boolean().required(),
  }).required(),
  genre: Joi.string().required(),
  synopsis: Joi.string().min(0).max(900).required(),
  rating: Joi.number().min(0).max(10).required(),
});

module.exports = MovieCreateValSchema;
