const controller = require("../controllers/session.controller");

module.exports = function (app) {
  app.post("/api/session", controller.create);

  app.put("/api/session", controller.update);
};
