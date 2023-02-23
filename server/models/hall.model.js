const mongoose = require("mongoose");

const hallSchema = new mongoose.Schema({
  column: { type: Number, default: null },
  row: { type: Number, default: null },
  ciname: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cinema",
  },
});

module.exports = mongoose.model("Hall", hallSchema);
