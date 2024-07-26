const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.get('/create', projectController.createProjectPage);
router.post('/create', projectController.createProject);
router.get('/:id', projectController.getProjectDetail);

module.exports = router;
