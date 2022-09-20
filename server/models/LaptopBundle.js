const mongoose = require('mongoose')

const LaptopBundleSchema = new mongoose.Schema({
  name: { type: String },
  type: {
    type: String,
    enum: [
      'Popular Accessories',
      'Office Supplies',
      'Software'
    ]
  },
  laptopExtraIDs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'LaptopExtra'
  }]
})

module.exports = mongoose.model('LaptopBundle', LaptopBundleSchema)