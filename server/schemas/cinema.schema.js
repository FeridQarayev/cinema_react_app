const Joi = require("joi");
Joi.joiObjectid = require("joi-objectid")(Joi);

exports.CinemaCreateValSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
});

exports.CinemaUpdateValSchema = Joi.object({
  cinemaId: Joi.joiObjectid(),
  name: Joi.string().min(3).max(20),
});

exports.CinemaDeleteValSchema = Joi.object({
  cinemaId: Joi.joiObjectid().required(),
});