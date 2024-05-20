const mongoose = require('mongoose');

const claimSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  claimNumber: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    enum: ['submitted', 'in_progress', 'resolved', 'rejected'],
    default: 'submitted',
  },
  police: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Police',
    required: true,
  },
  insuranceCompany: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'InsuranceCompany',
    required: true,
  },
  repairShop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'RepairShop',
  },
  salesStore: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SalesStore',
  },
  
});

const Claim = mongoose.model('Claim', claimSchema);

module.exports = Claim;