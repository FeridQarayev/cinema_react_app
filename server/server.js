require("./config/database").connect();

const cors = require("cors");
const express = require("express");
const { PORT } = process.env;

const app = express();

app.use(express.json(), cors());

require("./routes/auth.route")(app);
require("./routes/cinema.route")(app);
require("./routes/movie.route")(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
