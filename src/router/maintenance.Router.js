const MaintenanceRouter = require("express").Router();
const { add, update, remove } = require("../controller/maintenance.Controller");


MaintenanceRouter.post('/maintenance/add',add)
MaintenanceRouter.post('/maintenance/update',update)
MaintenanceRouter.post('/maintenance/remove',remove)


module.exports = MaintenanceRouter;
