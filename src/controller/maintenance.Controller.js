const Maintenance = require("../model/maintenance.Model");

module.exports = {
  getAll: async (req, res) => {
    try {
      await Maintenance.findAll()
        .then((data) => {
          res.status(200).json({
            err: false,
            menssage: "Successfully Get All.",
            data,
          });
        })
        .catch((ex) => {
          res.status(400).json({
            err: true,
            menssage: "Failure. " + ex,
          });
        });
    } catch (error) {
      res.status(500).json({
        err: true,
        menssage: "ERR . " + error,
      });
    }
  },
  add: async (req, res) => {
    try {
      await Maintenance.create(req.body)
        .then(() => {
          res.status(200).json({
            err: false,
            menssage: "Successfully inserted.",
          });
        })
        .catch((ex) => {
          res.status(400).json({
            err: true,
            menssage: "Failure. " + ex,
          });
        });
    } catch (error) {
      res.status(500).json({
        err: true,
        menssage: "ERR . " + error,
      });
    }
  },
  update: async (req, res) => {
    try {
      await Maintenance.update(req.body, {
        where: {
          id_maintenance: req.params["index"].replace(":", ""),
        },
      })
        .then(() => {
          res.status(200).json({
            err: false,
            menssage: "Successfully update.",
          });
        })
        .catch((ex) => {
          res.status(400).json({
            err: true,
            menssage: "Failure. " + ex,
          });
        });
    } catch (error) {
      res.status(500).json({
        err: true,
        menssage: "ERR . " + error,
      });
    }
  },
  remove: async (req, res) => {
    try {
      await Maintenance.destroy({
        where: { id_maintenance: req.params["index"].replace(":", "") },
      })
        .then(() => {
          res.status(200).json({
            err: false,
            menssage: "Successfully delete.",
          });
        })
        .catch(() => {
          res.status(400).json({
            err: true,
            menssage: "Failure. " + ex,
          });
        });
    } catch (error) {
      res.status(500).json({
        err: true,
        menssage: "ERR . " + error,
      });
    }
  },
};
