const controller = require("../controllers/session.controller");

module.exports = function (app) {
  app.get("/api/session", controller.get);

  app.post("/api/session", controller.create);

  app.put("/api/session", controller.update);

  app.delete("/api/session", controller.delete);
};
