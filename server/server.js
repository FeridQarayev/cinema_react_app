const cors = require("cors");
require("./config/database").connect();

const express = require("express");
const { PORT } = process.env;

const app = express();

app.use(express.json(), cors());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
