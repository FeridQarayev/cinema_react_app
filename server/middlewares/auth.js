const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const Role = require("../models/role.model");
var ObjectId = require("mongoose").Types.ObjectId;
require("dotenv").config();

const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res
      .status(403)
      .send({ message: "A token is required for authentication" });
  }

  jwt.verify(token, config.TOKEN_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.user = decoded.id;
    next();
  });
};

isAdmin = async (req, res, next) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).send({ message: "User Id is required!" });
  }

  if (!ObjectId.isValid(userId)) {
    return res.status(422).send({ message: "Validation Error!" });
  }

  const oldUser = await User.findById(userId);
  if (!oldUser) return res.status(404).send({ message: "User not found!" });

  User.findById(userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    Role.findOne(
      {
        _id: { $in: user.role },
      },
      (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        if (role.name === "admin") {
          next();
          return;
        }

        res.status(403).send({ message: "Require Admin Role!" });
        return;
      }
    );
  });
};

const authMiddleware = {
  verifyToken,
  isAdmin,
};

module.exports = authMiddleware;
