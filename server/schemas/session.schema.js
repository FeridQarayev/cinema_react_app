const Joi = require("joi");
Joi.joiObjectid = require("joi-objectid")(Joi);

exports.SessionCreateValSchema = Joi.object({
  movieId: Joi.joiObjectid().required(),
  hallId: Joi.joiObjectid().required(),
  date: Joi.date().required(),
  price: Joi.number().min(0).max(1000).required(),
  formats: Joi.object({
    d2: Joi.boolean().required(),
    d3: Joi.boolean().required(),
    d4: Joi.boolean().required(),
  }).required(),
  language: Joi.string().required(),
});

exports.SessionUpdateValSchema = Joi.object({
  sessionId: Joi.joiObjectid().required(),
  date: Joi.date(),
  price: Joi.number().min(0).max(1000),
  formats: Joi.object({
    d2: Joi.boolean(),
    d3: Joi.boolean(),
    d4: Joi.boolean(),
  }),
  language: Joi.string(),
});

exports.SessionDeleteValSchema = Joi.object({
  sessionId: Joi.joiObjectid().required(),
});
