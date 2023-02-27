const controller = require("../controllers/movie.controller");
const auth = require("../middlewares/auth");
const upload = require("../middlewares/upload");

module.exports = function (app) {
  app.get("/api/movie", controller.get);

  app.post("/api/movie/id", controller.getById);

  app.post(
    "/api/movie",
    upload.saveFilesToFolder("../client/src/images/movies"),
    [auth.verifyToken, auth.isAdmin],
    controller.create
  );

  app.put("/api/movie", [auth.verifyToken, auth.isAdmin], controller.update);

  app.delete("/api/movie", [auth.verifyToken, auth.isAdmin], controller.delete);

  app.delete(
    "/api/movie/image",
    [auth.verifyToken, auth.isAdmin],
    upload.deleteFilesToFolder()
  );
};
