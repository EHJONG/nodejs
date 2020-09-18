const express = require("express");
const route = express.Router();
const user = require("../controller/user");

route.route("/user").get(user.readUser).post(user.createUser).put(user.updateUser).delete(user.deleteUser);

module.exports = route;
