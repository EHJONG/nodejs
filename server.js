const express = require("express");
const app = express();
const port = process.env.port || 3000;
const router = require("./route/router");
const user = require("./controller/user");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/howl");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server on !");
  }
});

router.route("").get().post().put().delete();
