const { DataTypes, Connection } = require("../database/database");

const Maintenance = Connection.define("maintenance", {
  id_maintenance: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  id_deliveryman: { type: DataTypes.INTEGER, allowNull: false },
  date: { type: DataTypes.DATE , allowNull: false},
  plate: { type: DataTypes.STRING , allowNull: false},
  km: { type: DataTypes.INTEGER , allowNull: false},
  value: { type: DataTypes.DOUBLE , allowNull: false},
  type: { type: DataTypes.INTEGER , allowNull: false},
  obs: { type: DataTypes.STRING , allowNull: false},
  createdAt:{ type: DataTypes.DATE},
  updatedAt:{ type: DataTypes.DATE}
});
Maintenance.sync();

module.exports = Maintenance;
