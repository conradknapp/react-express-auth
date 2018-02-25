const jwt = require("jsonwebtoken");
const { SECRET } = require("../config/keys");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, SECRET);
    req.userData = decoded;
    // call next if we successfully authenticate
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Auth failed"
    });
  }
};
