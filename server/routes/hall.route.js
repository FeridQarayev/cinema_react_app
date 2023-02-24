const controller = require("../controllers/hall.controller");

module.exports = function (app) {
  app.post("/api/hall", controller.create);
};
