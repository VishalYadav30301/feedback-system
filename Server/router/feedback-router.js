const express = require('express');
const router = express.Router();

const feedbackForm = require('../controllers/feedback-controller');

router.route('/feedback').post(feedbackForm);

module.exports = router;

