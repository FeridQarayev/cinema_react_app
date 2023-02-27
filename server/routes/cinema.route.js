const controller = require("../controllers/cinema.controller");
const auth = require("../middlewares/auth");

module.exports = function (app) {
  app.get("/api/cinema", controller.get);

  app.post("/api/cinema/id", controller.getById);

  app.post("/api/cinema", [auth.verifyToken, auth.isAdmin], controller.create);

  app.put("/api/cinema", [auth.verifyToken, auth.isAdmin], controller.update);

  app.delete(
    "/api/cinema",
    [auth.verifyToken, auth.isAdmin],
    controller.delete
  );
};
