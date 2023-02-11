const express = require('express');
const router = express.Router();
const messagesController = require('../../controllers/messages.controller');

router.get('/publish/:message/:topic',messagesController.publish);
router.get('/subscribe/:topic',messagesController.subscribe);

module.exports = router;