const Joi = require("joi");
Joi.joiObjectid = require("joi-objectid")(Joi);

exports.salesCreateValSchema = Joi.object({
  userId: Joi.joiObjectid().required(),
  sessionId: Joi.joiObjectid().required(),
  date: Joi.string().required(),
  movieDate: Joi.string().required(),
  price: Joi.number().required(),
  movie: Joi.string().required(),
  language: Joi.string().required(),
  places: Joi.array({
    col: Joi.number().required(),
    row: Joi.number().required(),
  }).required(),
});

exports.salesGetValSchema = Joi.object({
  userId: Joi.joiObjectid(),
});
