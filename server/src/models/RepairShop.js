const mongoose = require('mongoose');

const repairShopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  
});

const RepairShop = mongoose.model('RepairShop', repairShopSchema);

module.exports = RepairShop;