const Joi = require("joi");
Joi.joiObjectid = require("joi-objectid")(Joi);

const MovieDeleteValSchema = Joi.object({
  movieId: Joi.joiObjectid().required(),
});

module.exports = MovieDeleteValSchema;
