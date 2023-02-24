const controller = require("../controllers/hall.controller");

module.exports = function (app) {
  app.get("/api/hall", controller.get);

  app.get("/api/hall/id", controller.getById);

  app.post("/api/hall", controller.create);

  app.put("/api/hall", controller.update);

  app.delete("/api/hall", controller.delete);
};
