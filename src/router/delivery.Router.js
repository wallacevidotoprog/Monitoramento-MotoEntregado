const { add, update, remove, getAll } = require('../controller/delivery.Controller');
const DeliveryRouter = require('express').Router();
const { eAuth } = require("../middleware/Auth");

DeliveryRouter.get('/delivery/getAll',getAll);
DeliveryRouter.post('/delivery/add',eAuth,add)
DeliveryRouter.post('/delivery/update/:index',eAuth,update)
DeliveryRouter.post('/delivery/remove/:index',eAuth,remove)

module.exports = DeliveryRouter;