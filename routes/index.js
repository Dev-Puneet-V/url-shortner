const express = require('express');
const router = express.Router();
const shorten = require('./shorten.js');

router.use('/shorten', shorten);

module.exports = router;