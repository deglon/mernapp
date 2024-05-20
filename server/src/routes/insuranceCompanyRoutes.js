const express = require('express');
const router = express.Router();
const insuranceCompanyController = require('../controllers/insuranceCompanyController');
const authMiddleware = require('../middleware/authMiddleware');

// Apply authentication middleware to protected routes
router.get('/', authMiddleware, insuranceCompanyController.getAllCompanies);
router.post('/', authMiddleware, insuranceCompanyController.createCompany);
router.put('/:companyId', authMiddleware, insuranceCompanyController.updateCompany);
router.delete('/:companyId', authMiddleware, insuranceCompanyController.deleteCompany);
router.get('/:companyId/users', authMiddleware, insuranceCompanyController.getCompanyUsers);

module.exports = router;