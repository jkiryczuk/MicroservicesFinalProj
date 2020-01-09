const express = require('express');
const router = express.Router();

const IndexController = require('../controllers/IndexController');
const OrdersController = require('../controllers/OrdersController');

router.get('/', IndexController.home);

router.get('/orders', OrdersController.getAll);
router.post('/orders', OrdersController.store);
router.put('/orders/confirm', OrdersController.confirm);
router.put('/orders/addproduct', OrdersController.addProductToOrder);
router.put('/orders/complete', OrdersController.complete);

module.exports = router;