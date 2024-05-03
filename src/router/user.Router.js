const {
  Login,
  Register,
  VerifyTK,
  Logout,
} = require("../controller/user.Controller");
const { eAuth } = require("../middleware/Auth");
const UserRouter = require("express").Router();

UserRouter.post("/login", Login);
UserRouter.post("/register", Register);
UserRouter.get("/verifyAuth", eAuth, VerifyTK);
UserRouter.post("/logout", eAuth, Logout);

module.exports = UserRouter;
