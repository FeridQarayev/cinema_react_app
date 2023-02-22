const mongoose = require("mongoose");
require("dotenv").config();

const { MONGO_URI } = process.env;
mongoose.set("strictQuery", false);

exports.connect = () => {
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log("Connected to database"))
    .catch((err) => console.error(err));
};
