const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { SECRET } = require("../config/keys");

exports.signup = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(401).send({ error: "Please provide email and password" });
  }

  await User.findOne({ email }, (err, existingUser) => {
    if (err) {
      return next(err);
    }

    if (existingUser) {
      return res
        .status(422)
        .send({ error: "Please fix username and password" });
    }

    const user = new User({
      email,
      password
    });

    const token = jwt.sign(
      {
        email,
        password
      },
      SECRET,
      {
        expiresIn: "1h"
      }
    );

    user.save(err => {
      if (err) {
        return next(err);
      }

      res.json({ token });
    });
  });
};
