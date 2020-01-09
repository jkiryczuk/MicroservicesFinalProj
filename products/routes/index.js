const express = require('express');
const router = express.Router();
//const cors = require('cors');

const IndexController = require('../controllers/IndexController');
const ProductsController = require('../controllers/ProductsController');

//router.all('*', cors());

router.get('/', IndexController.home);

router.get('/products', ProductsController.getAll);
router.get('/products/:id', ProductsController.getById);
router.post('/products', ProductsController.store);
router.put('/products', ProductsController.updateById);
router.get('/products/fororder/:id', ProductsController.getForOrderById);

module.exports = router;