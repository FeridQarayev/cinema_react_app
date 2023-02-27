const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
  },
  hall: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hall",
  },
  date: { type: String },
  price: { type: Number, default: 0 },
  formats: {
    d2: { type: Boolean, default: false },
    d3: { type: Boolean, default: false },
    d4: { type: Boolean, default: false },
  },
  language: { type: String, default: null },
  reserved: [
    {
      col: { type: Number },
      row: { type: Number },
    },
  ],
});

module.exports = mongoose.model("Session", sessionSchema);
