const controller = require("../controllers/cinema.controller");
// const auth = require("../middlewares/auth");

module.exports = function (app) {
  //   app.post("/api/cinema", [auth.verifyToken, auth.isAdmin], controller.create);
  app.post("/api/cinema", controller.create);

  app.put("/api/cinema", controller.update);
};
