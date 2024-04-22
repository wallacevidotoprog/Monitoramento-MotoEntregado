const routers = require("express").Router();
const DeliveryRouter = require("./router/delivery.router");
const MaintenanceRouter = require("./router/maintenance.Router");
const TypeMaintenace = require("./router/typeMaintenance.Router");
//const UserRouter = require("./router/user.Router");

routers.use(require("./router/user.Router"));
routers.use(DeliveryRouter);
routers.use(MaintenanceRouter);
routers.use(TypeMaintenace)

module.exports = routers;
