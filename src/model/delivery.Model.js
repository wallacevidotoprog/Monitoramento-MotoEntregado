const { DataTypes, Connection } = require("../database/database");

const Delivery = Connection.define("delivery", {
  id_delivery: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  id_deliveryman: { type: DataTypes.INTEGER, allowNull: false },
  date: { type: DataTypes.DATE },
  value: { type: DataTypes.DOUBLE },
  km: { type: DataTypes.INTEGER },
  router: { type: DataTypes.STRING },

  isRate: { type: DataTypes.BOOLEAN },
  isIfood: { type: DataTypes.BOOLEAN },
  isManipulation: { type: DataTypes.BOOLEAN },
});
Delivery.sync();

module.exports = Delivery;
