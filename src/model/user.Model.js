const { Sequelize, DataTypes, Connection } = require("../database/database");

const Users = Connection.define("users", {
  id_user: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  user: { type: DataTypes.STRING },
  pass: { type: DataTypes.STRING },
  isAdmin: { type: DataTypes.BOOLEAN },
});
Users.sync();

module.exports = Users;
