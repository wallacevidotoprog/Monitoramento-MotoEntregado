const Delivery = require("../model/delivery.model");

module.exports = {
  getAll: async (req, res) => {
    try {
      await Delivery.findAll()
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
    console.log(req.body.date);
    try {
      req.body.id_deliveryman = req.TOKEN.id; 
      await Delivery.create(req.body)
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
      await Delivery.update(req.body, {
        where: {
          id_delivery: req.params["index"].replace(":", ""),
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
      await Delivery.destroy({
        where: { id_delivery: req.params["index"].replace(":", "") },
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
