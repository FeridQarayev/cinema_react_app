const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema({
  userId: { type: String },
  sessionId: { type: String },
  date: { type: String },
  movieDate: { type: String },
  price: { type: Number, default: 0 },
  movie: { type: String },
  language: { type: String },
  places: [
    {
      col: { type: Number },
      row: { type: Number },
    },
  ],
});

module.exports = mongoose.model("Sales", salesSchema);
