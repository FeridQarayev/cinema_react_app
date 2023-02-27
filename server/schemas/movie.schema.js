const Joi = require("joi");
Joi.joiObjectid = require("joi-objectid")(Joi);

exports.MovieCreateValSchema = Joi.object({
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
  synopsis: Joi.string().min(1).max(900).required(),
  rating: Joi.number().min(0).max(10).required(),
});

exports.MovieUpdateValSchema = Joi.object({
  movieId: Joi.joiObjectid().required(),
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

exports.MovieDeleteValSchema = Joi.object({
  movieId: Joi.joiObjectid().required(),
});
