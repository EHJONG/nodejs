const express = require("express");
const route = express.Router();
const user = require("../controller/user");
const auth = require("../auth/auth");

route
  .route("/user")
  .get(auth.isBasicAuthenticate, user.readUser)
  .post(auth.isBasicAuthenticate, user.createUser)
  .put(auth.isBasicAuthenticate, user.updateUser)
  .delete(auth.isBasicAuthenticate, user.deleteUser);

route
  .route("/test")
  .get((req, res) => {
    console.log(req);
    console.log("-----");
    console.log(req.body);
    console.log("-----");
    console.log(req.query);
    console.log("-----");
    res.send("test 확인");
  })
  .post((req, res) => {
    console.log(req.body);
    res.send("post 방식");
  });

route.route("/test/:id").get((req, res) => {
  console.log(req);
  console.log("-----");
  console.log(req.body);
  console.log("-----");
  console.log(req.query);
  console.log("-----");
  res.send("test 확인");
});

module.exports = route;
