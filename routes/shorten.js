const express = require('express');
const router = express.Router();
const {
    getShortUrl
} = require('controller');
router.get('/', getShortUrl);

module.exports = router;