const mongoose = require('mongoose');

const salesStoreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  
});

const SalesStore = mongoose.model('SalesStore', salesStoreSchema);

module.exports = SalesStore;