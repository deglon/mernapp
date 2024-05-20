const express = require('express');
const router = express.Router();
const policeController = require('../controllers/policeController');
const authMiddleware = require('../middleware/authMiddleware');

// Apply authentication middleware to protected routes
router.get('/', authMiddleware, policeController.getAllPolice);
router.post('/', authMiddleware, policeController.createPolice);
router.put('/:policeId', authMiddleware, policeController.updatePolice);
router.delete('/:policeId', authMiddleware, policeController.deletePolice);

module.exports = router;