const MaintenanceRouter = require("express").Router();
const { add, update, remove, getAll } = require("../controller/maintenance.Controller");
const { eAuth } = require("../middleware/Auth");

MaintenanceRouter.get("/maintenance/getAll", eAuth, getAll);
MaintenanceRouter.post("/maintenance/add", eAuth, add);
MaintenanceRouter.post("/maintenance/update/:index", eAuth, update);
MaintenanceRouter.post("/maintenance/remove/:index", eAuth, remove);

module.exports = MaintenanceRouter;
