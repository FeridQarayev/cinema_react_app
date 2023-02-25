require("./config/database").connect();

const cors = require("cors");
const express = require("express");
const { PORT } = process.env;

const app = express();

app.use(express.json(), cors(), express.urlencoded({ extended: true }));

require("./routes/auth.route")(app);
require("./routes/cinema.route")(app);
require("./routes/hall.route")(app);
require("./routes/movie.route")(app);
require("./routes/session.route")(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
