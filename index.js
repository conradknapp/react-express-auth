const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const router = require("./router");
const mongoose = require("mongoose");
const { MONGO_URI } = require("./config/keys");

mongoose.connect(MONGO_URI, () => {
  console.log("Mongoose connected");
});

app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));

router(app);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
