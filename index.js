const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = require("./router");
const mongoose = require("mongoose");
const { MONGO_URI } = require("./config/keys");

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, () => {
  console.log("Mongo connected");
});

app.use(bodyParser.json({ type: "*/*" }));

router(app);

const webpackMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js");
app.use(webpackMiddleware(webpack(webpackConfig)));

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
