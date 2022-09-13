const mongoose = require('mongoose')

const LaptopSchema = new mongoose.Schema({
  name: { type: String },
  type: { type: String },
  quantity: { type: Number },
  price: { type: Number },
  images: [{ type: String }]
})

module.exports = mongoose.model('Laptop', LaptopSchema)