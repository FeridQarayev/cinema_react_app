const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  //   img: { type: String, default: null },
  image: {
    data: String,
    contentType: String,
  },
});

module.exports = mongoose.model("Movie", movieSchema);
