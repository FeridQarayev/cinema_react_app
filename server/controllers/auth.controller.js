const User = require("../models/user.model");
const Role = require("../models/role.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mapping = require("../mappings/validate.map");
const registerValSchema = require("../schemas/register.schema");
const loginValSchema = require("../schemas/login.schema");

require("dotenv").config();

exports.register = async (req, res) => {
  try {
    // Get user input
    const { firstName, lastName, email, password } = req.body;

    const validate = mapping.mapping(req, registerValSchema);
    if (validate.valid)
      return res.status(422).send({ message: validate.message });

    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res
        .status(409)
        .send({ message: "User Already Exist. Please Login" });
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      firstName,
      lastName,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });

    Role.findOne({ name: "user" }, (err, role) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      user.role = role._id;
      user.save((err) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
      });
    });
    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    // save user token
    user.token = token;

    // return new user
    return res.status(201).send({
      message: "Successfully registered!",
      data: user,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
  // Our register logic ends here
};

exports.login = (req, res) => {
  const { email } = req.body;

  const validate = mapping.mapping(req, loginValSchema);
  if (validate.valid)
    return res.status(422).json({ message: validate.message });

  User.findOne({ email })
    .populate("role")
    .exec((err, user) => {
      if (err) {
        console.log("user:", err);
        res.status(500).send({ message: err });
        return;
      }
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({ message: "Invalid Password!" });
      }

      // var token = jwt.sign({ id: user.id }, config.secret, {
      //   expiresIn: "1h", // 24 hours
      // });

      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      user.token = token;

      return res.status(200).send({ message: "Welcome!", data: user });
    });
};
