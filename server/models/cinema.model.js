const mongoose = require("mongoose");

const cinemaSchema = new mongoose.Schema({
  name: { type: String, default: null },
  halls: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hall",
    },
  ],
});

module.exports = mongoose.model("Cinema", cinemaSchema);
