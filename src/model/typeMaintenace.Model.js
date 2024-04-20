const { DataTypes, Connection } = require("../database/database");

const TypeMaintenace = Connection.define("typeMaintenace", {
  id_typeMaintenace: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  type: { type: DataTypes.STRING , allowNull: false},
  createdAt:{ type: DataTypes.DATE},
  updatedAt:{ type: DataTypes.DATE}
});
TypeMaintenace.sync();
module.exports = TypeMaintenace;
