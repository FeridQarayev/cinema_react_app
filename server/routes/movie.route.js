const controller = require("../controllers/movie.controller");
const auth = require("../middlewares/auth");
const upload = require("../middlewares/upload");

module.exports = function (app) {
  app.get("/api/movie", controller.get);

  app.get("/api/movie/id", controller.getById);

  app.post(
    "/api/movie",
    upload.saveFilesToFolder("../client/src/images/movies"),
    controller.create
  );

  app.put("/api/movie", controller.update);

  app.delete("/api/movie", controller.delete);

  app.delete("/api/movie/image", upload.deleteFilesToFolder());
};
