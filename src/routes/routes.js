const express = require('express');
const router = express.Router();
const myDataController = require('../models/controllers');

router.get('/data', myDataController.getData);

router.post('/data', myDataController.addData);

module.exports = router;