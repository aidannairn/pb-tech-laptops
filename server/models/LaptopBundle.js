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
  LaptopExtraIDs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'LaptopExtra'
  }]
})

module.exports = mongoose.model('LaptopBundle', LaptopBundleSchema)