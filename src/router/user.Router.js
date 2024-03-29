const { Login, Register, VerifyTK } = require("../controller/user.Controller");
const { eAuth } = require("../middleware/Auth");
const UserRouter = require("express").Router();

UserRouter.post("/login", Login);
UserRouter.post("/register", Register);
UserRouter.get("/verifyAuth", eAuth,VerifyTK);

module.exports = UserRouter;
