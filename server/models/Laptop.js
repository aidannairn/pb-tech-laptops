const mongoose = require('mongoose')

const LaptopSchema = new mongoose.Schema({
  name: { type: String },
  types: [{ type: String }],
  quantity: { type: Number },
  price: { type: Number },
  images: [{ type: String }]
})

module.exports = mongoose.model('Laptop', LaptopSchema)