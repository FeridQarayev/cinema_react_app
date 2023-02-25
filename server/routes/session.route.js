const controller = require("../controllers/session.controller");

module.exports = function (app) {
  app.post("/api/session", controller.create);
};
