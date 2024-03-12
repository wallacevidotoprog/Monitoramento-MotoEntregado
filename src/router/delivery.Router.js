const { add, update, remove } = require('../controller/delivery.Controller');
const DeliveryRouter = require('express').Router();

DeliveryRouter.post('/delivery/add',add)
DeliveryRouter.post('/delivery/update/:index',update)
DeliveryRouter.post('/delivery/remove/:index',remove)

module.exports = DeliveryRouter;