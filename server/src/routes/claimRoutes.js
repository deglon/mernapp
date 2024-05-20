const express = require('express');
const router = express.Router();
const claimController = require('../controllers/claimController');
const authMiddleware = require('../middleware/authMiddleware');

// Apply authentication middleware to protected routes
router.get('/', authMiddleware, claimController.getAllClaims);
router.post('/', authMiddleware, claimController.createClaim);
router.put('/:claimId', authMiddleware, claimController.updateClaim);
router.delete('/:claimId', authMiddleware, claimController.deleteClaim);

module.exports = router;