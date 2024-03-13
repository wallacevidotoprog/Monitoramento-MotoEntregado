const { DataTypes, Connection } = require("../database/database");

const Delivery = Connection.define("delivery", {
  id_delivery: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  id_deliveryman: { type: DataTypes.INTEGER, allowNull: false },
  date: { type: DataTypes.DATE, allowNull: false },
  value: { type: DataTypes.DOUBLE, allowNull: false },
  km: { type: DataTypes.INTEGER, allowNull: false },
  router: { type: DataTypes.STRING, allowNull: false },

  isRate: { type: DataTypes.BOOLEAN },
  isIfood: { type: DataTypes.BOOLEAN },
  isManipulation: { type: DataTypes.BOOLEAN },
});
Delivery.sync();

module.exports = Delivery;
