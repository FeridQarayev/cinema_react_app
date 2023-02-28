const controller = require("../controllers/sales.controller");
const auth = require("../middlewares/auth");

module.exports = function (app) {
  app.get("/api/sales", controller.get);

  app.post("/api/sales/id", controller.getById);

  app.post("/api/sales", auth.verifyToken, controller.create);
};
