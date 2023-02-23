const controller = require("../controllers/cinema.controller");

module.exports = function (app) {
  app.post("/api/cinema", controller.create);
};
