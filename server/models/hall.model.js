const mongoose = require("mongoose");

const hallSchema = new mongoose.Schema({
  name: { type: String, default: null },
  column: { type: Number, default: null },
  row: { type: Number, default: null },
  cinema: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cinema",
  },
});

module.exports = mongoose.model("Hall", hallSchema);
