const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: { type: String, default: null },
  actor: { type: String, default: null },
  director: { type: String, default: null },
  duration: { type: String, default: null },
  ageLimit: { type: Number, default: null },
  sessionTime: { type: Date },
  sessionTimeOut: { type: Date },
  formats: {
    d2: { type: Boolean, default: false },
    d3: { type: Boolean, default: false },
    d4: { type: Boolean, default: false },
  },
  languages: {
    az: { type: Boolean, default: false },
    tu: { type: Boolean, default: false },
    ru: { type: Boolean, default: false },
    en: { type: Boolean, default: false },
  },
  genre: { type: String, default: null },
  synopsis: { type: String },
  rating: { type: Number, default: null },
  image: { type: String, default: null },
  coverImage: { type: String, default: null },
});

module.exports = mongoose.model("Movie", movieSchema);
