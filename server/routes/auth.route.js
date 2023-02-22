const controller = require("../controllers/auth.controller");

module.exports = function (app) {
  app.post("/api/register", controller.register);

  app.post("/api/login", controller.login);
};
