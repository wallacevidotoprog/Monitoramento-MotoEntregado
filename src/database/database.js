const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const Connection = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASS,
  {
    port: process.env.DATABASE_PORT,
    host: process.env.DATABASE_URL,
    dialect: "mysql",
    timezone: '-03:00',
    // logging:false
  }
);

Connection.authenticate()
  .then((e) => {
    console.log("\x1b[33m[MySQL]\x1b[36m Connection OK \x1b[0m");
  })
  .catch((err) => {
    console.log("\x1b[33m[MySQL]\x1b[31m" + err + "\x1b[0m");
  });

module.exports = { Sequelize, DataTypes, Connection };
