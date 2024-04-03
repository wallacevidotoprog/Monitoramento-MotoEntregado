const jwt = require("jsonwebtoken");

module.exports = {
  eAuth: async (req, res, next) => {
    try {
      const tk = req.headers["cookie"].split("=")[1];
      if (!tk) {
        return res.status(401).json({
          err: true,
          mensage: "Authentication error",
        });
      }
      const decod = jwt.verify(tk, process.env.TOKEN);
      if (!decod) {
        return res.status(401).json({
          err: true,
          mensage: "Authentication error",
        });
      }

      req.TOKEN = decod;
      req.isVerity = true;
      next();
    } catch (error) {
      return res.status(500).json({
        err: true,
        menssage: "Authentication error => " + error,
      });
    }
  },
};
