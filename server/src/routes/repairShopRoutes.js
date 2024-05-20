const express = require('express');
const router = express.Router();
const repairShopController = require('../controllers/repairShopController');
const authMiddleware = require('../middleware/authMiddleware');

// Apply authentication middleware to protected routes
router.get('/', authMiddleware, repairShopController.getAllRepairShops);
router.post('/', authMiddleware, repairShopController.createRepairShop);
router.put('/:repairShopId', authMiddleware, repairShopController.updateRepairShop);
router.delete('/:repairShopId', authMiddleware, repairShopController.deleteRepairShop);

module.exports = router;