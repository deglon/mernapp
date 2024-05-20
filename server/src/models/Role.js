const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ['admin', 'assureur', 'police', 'repair_shop', 'sales_store'], 
  },
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;