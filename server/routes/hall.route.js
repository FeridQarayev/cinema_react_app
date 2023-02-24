const controller = require("../controllers/hall.controller");

module.exports = function (app) {
  app.post("/api/hall", controller.create);

  app.put("/api/hall", controller.update);

  app.delete("/api/hall", controller.delete);
};
