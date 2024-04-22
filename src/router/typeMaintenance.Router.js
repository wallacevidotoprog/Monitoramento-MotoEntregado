const TypeMaintenace = require("express").Router();
const { getAll } = require("../controller/typeMaintenance.Controller");
const { eAuth } = require("../middleware/Auth");

TypeMaintenace.get("/typeMaintenance", eAuth, getAll);

module.exports = TypeMaintenace;
