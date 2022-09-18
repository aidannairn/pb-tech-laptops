const mongoose = require('mongoose')

const LaptopBundleSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: [
      'Popular Accessories',
      'Office Supplies',
      'Software'
    ]
  },
  laptopIDs: [{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Laptop'
  }],
  LaptopExtraIDs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'LaptopExtra'
  }]
})

module.exports = mongoose.model('LaptopBundle', LaptopBundleSchema)