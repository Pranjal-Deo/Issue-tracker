const express = require('express');
const router = express.Router();
const issueController = require('../controllers/issueController');

router.get('/create/:projectId', issueController.createIssuePage);
router.post('/create', issueController.createIssue);

module.exports = router;
