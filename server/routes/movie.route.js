const auth = require("../middlewares/auth");

module.exports = function (app) {
  app.post("/api/welcome", auth.verifyToken, (req, res) => {
    res.status(200).send("Welcome 🙌 ");
  });

  app.post("/api/admin", [auth.verifyToken, auth.isAdmin], (req, res) => {
    res.status(200).send("Welcome Admin 🙌 ");
  });
};
