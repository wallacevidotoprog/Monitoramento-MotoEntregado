const Delivery = require("../model/delivery.Model");
const Users = require("../model/user.Model");
const { getUser } = require("./user.Controller");

module.exports = {
  getAll: async (req, res) => {
    try {
      await Delivery.findAll()
        .then(async (data) => {
          for (let index = 0; index < 0; index++) {
            if (data[index].id_deliveryman != "") {
              data[index].id_deliveryman = await getUser(
                data[index].id_deliveryman
              );
            }
            if (data[index].date != "") {
              let tempData = await data[index].date.toLocaleString("pt-br", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              });
              data[index].date = tempData;
            }
            if (data[index].value != "") {
              let tempData = await data[index].value.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              });
              data[index].value = tempData;
            }
          }

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
