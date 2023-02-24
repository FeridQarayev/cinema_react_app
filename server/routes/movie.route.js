const controller = require("../controllers/movie.controller");
const auth = require("../middlewares/auth");
const upload = require("../middlewares/upload");

module.exports = function (app) {
  app.post("/api/welcome", auth.verifyToken, (req, res) => {
    res.status(200).send("Welcome 🙌 ");
  });

  app.post("/api/admin", [auth.verifyToken, auth.isAdmin], (req, res) => {
    res.status(200).send("Welcome Admin 🙌 ");
  });

  app.post("/api/movie", upload.single("myImage"), controller.create);
};
