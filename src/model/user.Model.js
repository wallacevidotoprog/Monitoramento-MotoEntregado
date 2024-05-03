const { Sequelize, DataTypes, Connection } = require("../database/database");
const Delivery = require("./delivery.Model");

const Users = Connection.define("users", {
  id_user: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  user: { type: DataTypes.STRING ,},
  pass: { type: DataTypes.STRING },
  isAdmin: { type: DataTypes.BOOLEAN },
});
// Users.belongsTo(Delivery, {
//   foreignKey: 'id_user',
//   targetKey: 'id_user'
// });

//Users.sync({alter:true});

module.exports = Users;
