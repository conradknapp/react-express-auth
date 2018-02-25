const auth = require("./controllers/auth");

module.exports = app => {
  app.post("/signup", auth.signup);
};
