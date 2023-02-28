const controller = require("../controllers/sales.controller");
const auth = require("../middlewares/auth");

module.exports = function (app) {
  app.get("/api/hall", controller.get);

  app.post("/api/hall/id", controller.getById);

  app.post("/api/hall", auth.verifyToken, controller.create);
};
