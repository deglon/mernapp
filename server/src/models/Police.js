const mongoose = require('mongoose');

const policeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  
});

const Police = mongoose.model('Police', policeSchema);

module.exports = Police;