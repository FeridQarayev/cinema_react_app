const Joi = require("joi");
Joi.joiObjectid = require("joi-objectid")(Joi);

exports.hallCreateValSchema = Joi.object({
  userId: Joi.joiObjectid().required(),
  name: Joi.string().min(3).max(20).required(),
  column: Joi.number().min(5).max(15).required(),
  row: Joi.number().min(5).max(20).required(),
  cinemaId: Joi.joiObjectid().required(),
});

exports.hallUpdateValSchema = Joi.object({
  userId: Joi.joiObjectid().required(),
  hallId: Joi.joiObjectid().required(),
  name: Joi.string().min(3).max(20),
  column: Joi.number().min(5).max(15),
  row: Joi.number().min(5).max(20),
});

exports.hallDeleteValSchema = Joi.object({
  userId: Joi.joiObjectid(),
  hallId: Joi.joiObjectid().required(),
});
