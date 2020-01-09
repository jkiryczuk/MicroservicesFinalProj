const express = require('express');
const router = express.Router();

const IndexController = require('../controllers/IndexController');
const UsersController = require('../controllers/UsersController');

router.get('/', IndexController.home);

router.get('/users', UsersController.getAll);
router.get('/users/:id', UsersController.getById);
router.post('/users', UsersController.store);
router.put('/users', UsersController.updateById);

module.exports = router;