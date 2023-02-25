const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, default: null },
  lastName: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
  },
});

module.exports = mongoose.model("user", userSchema);
