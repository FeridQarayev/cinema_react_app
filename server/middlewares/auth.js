const jwt = require("jsonwebtoken");
require("dotenv").config();

const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token ||
    req.query.token ||
    req.headers["x-access-token"] ||
    req.session.token;

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  //   try {
  //     const decoded = jwt.verify(token, config.TOKEN_KEY);
  //     req.user = decoded;
  //   } catch (err) {
  //     return res.status(401).send("Invalid Token");
  //   }
  //   return next();

  jwt.verify(token, config.TOKEN_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.user = decoded.id;
    next();
  });
};

module.exports = verifyToken;
