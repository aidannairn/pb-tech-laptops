const mongoose = require('mongoose')

const LaptopExtraSchema = new mongoose.Schema({
  name: { type: String },
  types: [{ type: String }],
  quantity: { type: Number },
  price: { type: Number },
  images: [{ type: String }]
})

module.exports = mongoose.model('LaptopExtra', LaptopExtraSchema)