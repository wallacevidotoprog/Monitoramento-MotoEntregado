const jwt = require("jsonwebtoken");
const crypt = require("bcryptjs");
const Users = require("../model/user.Model");
require("dotenv").config();

async function VerifyExistUser(_user) {
  const result = await Users.findOne({
    attributes: ["user"],
    where: { user: _user },
  });
  return result ? true : false;
}

module.exports = {
  Register: async (req, res) => {
    try {
      if (!(await VerifyExistUser(req.body.user))) {
        req.body.pass = await crypt.hash(req.body.pass, 10);
        await Users.create(req.body)
          .then((e) => {
            res.status(200).json({
              err: false,
              menssage: "Registration completed successfully !",
            });
          })
          .catch((x) => {
            res.status(400).json({
              err: true,
              menssage: x,
            });
          });
      } else {
        res.status(401).json({
          err: true,
          menssage: "Try another user.",
        });
      }
    } catch (error) {
      res.status(500).json({
        err: true,
        menssage: error,
      });
    }
  },
  Login: async (req, res) => {
    try {
      await Users.findOne({
        attributes: ["id_user", "user", "pass", "isAdmin"],
        where: {
          user: req.body.user,
        },
      })
        .then(async (data) => {
          if (!data) {
            return res.status(400).json({
              err: true,
              menssage: "User does not exist",
              data,
            });
          }
          if (await crypt.compare(req.body.pass, data.pass)) {
            const TK = jwt.sign(
              { id: data.id_user, user: data.user, isAdmin: data.isAdmin },
              process.env.TOKEN,
              { expiresIn: "1d" }
            );
            res.cookie("Authorization", TK);

            return res.status(200).json({
              err: false,
              menssage: "Logged in successfully",
            });
          }

          return res.status(401).json({
            err: false,
            menssage: "User and Pass not is User",
          });
        })
        .catch((err) => {
          return res.status(400).json({
            err: false,
            menssage:
              "Something wrong when entering your email or password." + err,
          });
        });
    } catch (error) {
      return res.status(500).json({
        err: false,
        menssage: error,
      });
    }
  },
};
