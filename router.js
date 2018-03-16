const auth = require("./controllers/auth");
const checkAuth = require("./middleware/checkAuth");

module.exports = app => {
  app.get("/api", checkAuth, (req, res) => {
    res.send("hello");
  });
  app.post("/api/sign_in", auth.signin);
  app.post("/api/sign_up", auth.signup);
};
