const express = require('express');
const router = express.Router();
const salesStoreController = require('../controllers/salesStoreController');
const authMiddleware = require('../middleware/authMiddleware');

// Apply authentication middleware to protected routes
router.get('/', authMiddleware, salesStoreController.getAllSalesStores);
router.post('/', authMiddleware, salesStoreController.createSalesStore);
router.put('/:salesStoreId', authMiddleware, salesStoreController.updateSalesStore);
router.delete('/:salesStoreId', authMiddleware, salesStoreController.deleteSalesStore);

module.exports = router;