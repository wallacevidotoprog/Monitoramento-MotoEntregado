const { where } = require("sequelize");
const TypeMaintenace = require("../model/typeMaintenace.Model");

module.exports = {
  getAll: async (req, res) => {
    try {
      await TypeMaintenace.findAll()
        .then((data) => {
          return res.status(200).json({
            err: false,
            menssagem: "Sucesseful",
            data,
          });
        })
        .catch((err) => {
          res.status(401).json({
            err: true,
            menssagem: "Fail",
          });
        });
    } catch (error) {
        return res.status(500).json({
            err: true,
            menssagem: "Err",
            error
          });
    }
  },
};
