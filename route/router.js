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

module.exports = route;
