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
