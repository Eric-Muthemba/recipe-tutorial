const express = require('express');
const router = express.Router();
const apis = require('./api')

router.use('/api', apis);

module.exports = router;