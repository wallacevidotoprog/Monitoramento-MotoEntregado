const { Login, Register } = require("../controller/user.Controller");
const UserRouter = require("express").Router();

UserRouter.post("/login", Login);
UserRouter.post("/register", Register);

module.exports = UserRouter;
