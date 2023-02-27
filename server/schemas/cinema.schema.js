const Joi = require("joi");
Joi.joiObjectid = require("joi-objectid")(Joi);

exports.CinemaCreateValSchema = Joi.object({
  userId: Joi.joiObjectid().required(),
  name: Joi.string().min(3).max(20).required(),
});

exports.CinemaUpdateValSchema = Joi.object({
  userId: Joi.joiObjectid().required(),
  cinemaId: Joi.joiObjectid().required(),
  name: Joi.string().min(3).max(20).required(),
});

exports.CinemaDeleteValSchema = Joi.object({
  userId: Joi.joiObjectid(),
  cinemaId: Joi.joiObjectid().required(),
});
