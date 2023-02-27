const controller = require("../controllers/hall.controller");
const auth = require("../middlewares/auth");

module.exports = function (app) {
  app.get("/api/hall", controller.get);

  app.post("/api/hall/id", controller.getById);

  app.post("/api/hall", [auth.verifyToken, auth.isAdmin], controller.create);

  app.put("/api/hall", [auth.verifyToken, auth.isAdmin], controller.update);

  app.delete("/api/hall", [auth.verifyToken, auth.isAdmin], controller.delete);
};
