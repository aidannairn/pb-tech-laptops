const mongoose = require('mongoose')

const LaptopSchema = new mongoose.Schema({
  name: { type: String },
  types: [{ type: String }],
  quantity: { type: Number },
  price: { type: Number },
  images: [{ type: String }],
  bundleIDs: [{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'LaptopBundle'
  }]
})

module.exports = mongoose.model('Laptop', LaptopSchema)