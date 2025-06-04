const express = require('express');
const router = express.Router();

const { storeMessage, fetchMessage } = require('../controllers/messageController'); // ✅ imported as object

router.post('/store', storeMessage);
router.post('/fetch', fetchMessage);

module.exports = router;
