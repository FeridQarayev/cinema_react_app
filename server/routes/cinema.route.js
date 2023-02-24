const controller = require("../controllers/cinema.controller");
// const auth = require("../middlewares/auth");

module.exports = function (app) {
  //   app.post("/api/cinema", [auth.verifyToken, auth.isAdmin], controller.create);
  app.get("/api/cinema", controller.get);

  app.get("/api/cinema/id", controller.getById);

  app.post("/api/cinema", controller.create);

  app.put("/api/cinema", controller.update);

  app.delete("/api/cinema", controller.delete);
};
