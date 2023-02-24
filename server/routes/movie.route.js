const controller = require("../controllers/movie.controller");
const auth = require("../middlewares/auth");
const saveFilesToFolder = require("../middlewares/upload")(
  "../client/src/images/movies"
);
const imageVal = require("../middlewares/checkImage");

module.exports = function (app) {
  app.post("/api/welcome", auth.verifyToken, (req, res) => {
    res.status(200).send("Welcome 🙌 ");
  });

  app.post("/api/admin", [auth.verifyToken, auth.isAdmin], (req, res) => {
    res.status(200).send("Welcome Admin 🙌 ");
  });

  app.post("/api/movie", saveFilesToFolder, controller.create);
};
