const Claim = require('../models/Claim');

const getAllClaims = async (req, res) => {
  try {
    const claims = await Claim.find().populate('police insuranceCompany repairShop salesStore'); 
    res.json(claims);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createClaim = async (req, res) => {
  try {
    const { description, date, policeId, insuranceCompanyId, repairShopId, salesStoreId } = req.body;

    const newClaim = new Claim({
      description,
      date,
      claimNumber: `CLM-${Date.now()}`, // Generate a unique claim number
      status: 'submitted', 
      police: policeId,
      insuranceCompany: insuranceCompanyId,
      repairShop: repairShopId || null,
      salesStore: salesStoreId || null,
    });

    await newClaim.save();

    res.json({
      message: 'Claim created successfully',
      claim: newClaim,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateClaim = async (req, res) => {
  try {
    const claimId = req.params.claimId;
    const { description, date, status, repairShopId, salesStoreId } = req.body;

    const claim = await Claim.findByIdAndUpdate(
      claimId,
      { description, date, status, repairShop: repairShopId || null, salesStore: salesStoreId || null },
      { new: true } // Return the updated document
    );

    if (!claim) {
      return res.status(404).json({ error: 'Claim not found' });
    }

    res.json({
      message: 'Claim updated successfully',
      claim,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteClaim = async (req, res) => {
  try {
    const claimId = req.params.claimId;

    const claim = await Claim.findByIdAndDelete(claimId);
    if (!claim) {
      return res.status(404).json({ error: 'Claim not found' });
    }

    res.json({ message: 'Claim deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllClaims,
  createClaim,
  updateClaim,
  deleteClaim,
};