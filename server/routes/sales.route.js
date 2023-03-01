const controller = require("../controllers/sales.controller");

module.exports = function (app) {
  app.get("/api/sales", controller.get);

  app.post("/api/sales/id", controller.getById);

  app.post("/api/sales", controller.create);
};
