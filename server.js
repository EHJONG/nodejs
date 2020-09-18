const express = require("express");
const app = express();
const port = process.env.port || 3000;
const router = require("./route/router");
const user = require("./controller/user");
const route = require("./route/router");

app.use(router);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server on !");
  }
});

route;
