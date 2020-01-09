const express = require('express');
const router = express.Router();

const IndexController = require('../controllers/IndexController');
const EmailsController = require('../controllers/EmailsController');

router.get('/', IndexController.home);

router.post('/emails', EmailsController.send);

module.exports = router;