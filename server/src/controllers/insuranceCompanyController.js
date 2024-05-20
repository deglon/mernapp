const InsuranceCompany = require('../models/InsuranceCompany');
const User = require('../models/User'); 

const getAllCompanies = async (req, res) => {
  try {
    const companies = await InsuranceCompany.find().populate('users'); 
    res.json(companies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createCompany = async (req, res) => {
  try {
    const { name, address } = req.body;

    const newCompany = new InsuranceCompany({
      name,
      address,
    });

    await newCompany.save();

    res.json({
      message: 'Insurance Company created successfully',
      company: newCompany,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateCompany = async (req, res) => {
  try {
    const companyId = req.params.companyId;
    const { name, address } = req.body;

    const company = await InsuranceCompany.findByIdAndUpdate(
      companyId,
      { name, address },
      { new: true } // Return the updated document
    );

    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }

    res.json({
      message: 'Insurance Company updated successfully',
      company,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteCompany = async (req, res) => {
  try {
    const companyId = req.params.companyId;

    const company = await InsuranceCompany.findByIdAndDelete(companyId);
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }

    res.json({ message: 'Insurance Company deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getCompanyUsers = async (req, res) => {
  try {
    const companyId = req.params.companyId;
    const users = await User.find({ company: companyId }).populate('role company');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllCompanies,
  createCompany,
  updateCompany,
  deleteCompany,
  getCompanyUsers,
};