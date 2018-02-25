const auth = require("./controllers/auth");
const checkAuth = require("./middleware/checkAuth");

module.exports = app => {
  app.get("/", checkAuth, (req, res) => {
    res.send("hi");
  });
  app.post("/signup", auth.signup);
};
