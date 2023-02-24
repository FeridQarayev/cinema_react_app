const Movie = require("../models/movie.model");

exports.create = (req, res) => {
  const obj = {
    img: {
      data: fs.readFileSync(
        path.join(__dirname + "/uploads/" + req.file.filename)
      ),
      contentType: "image/png",
    },
  };
  const movie = new Movie({
    image: obj.img,
  });
  movie.save((err) => {
    err ? console.log(err) : res.redirect("/");
  });
};
