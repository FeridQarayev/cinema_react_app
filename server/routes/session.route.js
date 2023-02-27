const controller = require("../controllers/session.controller");
const auth = require("../middlewares/auth");

module.exports = function (app) {
  app.get("/api/session", controller.get);

  app.post("/api/session/id", controller.getById);

  app.post("/api/session", [auth.verifyToken, auth.isAdmin], controller.create);

  app.put("/api/session", [auth.verifyToken, auth.isAdmin], controller.update);

  app.delete(
    "/api/session",
    [auth.verifyToken, auth.isAdmin],
    controller.delete
  );
};
