const express = require("express");
const Router = express.Router();
const userController = require("../controllers/userController");

Router.get("/login", userController.Login);
Router.post("/signup", userController.signup);
Router.get("/getUserInfo", userController.getUserInfo);

module.exports = Router;
