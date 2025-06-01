const express = require('express');
const router = express.Router();
const { storeMessage } = require('../controllers/messageController');

router.post('/store', storeMessage);

module.exports = router;
