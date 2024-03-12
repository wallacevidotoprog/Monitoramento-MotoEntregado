const { DataTypes, Connection } = require("../database/database");

const Maintenance = Connection.define("maintenance", {
  id_maintenance: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  id_deliveryman: { type: DataTypes.INTEGER, allowNull: false },
  date: { type: DataTypes.DATE },
  plate: { type: DataTypes.STRING },
  km: { type: DataTypes.INTEGER },
  value: { type: DataTypes.DOUBLE },
});
Maintenance.sync();

module.exports = Maintenance;
