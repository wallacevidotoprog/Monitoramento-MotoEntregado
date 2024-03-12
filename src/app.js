const routers = require("express").Router();
const DeliveryRouter = require("./router/delivery.router");
const MaintenanceRouter = require("./router/maintenance.Router");
const UserRouter = require("./router/user.Router");

routers.use(UserRouter);
routers.use(DeliveryRouter);
routers.use(MaintenanceRouter);

module.exports = routers;
